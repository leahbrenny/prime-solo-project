const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('body in favorite GET', req.params.id);
  //query selects plant img, plant name, and id for user
  let query = `SELECT  "plant"."plant_img" as "image",
  "plant"."plant_name" as "plant",
  "plant"."id" as "id",
  "plant"."favorite" as "favorite"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  JOIN "room_plant" ON "room"."id" = "room_plant"."room_id"
  JOIN "plant" ON "plant"."id" = "room_plant"."plant_id"
  WHERE "user"."id" = $1
  AND "plant"."favorite" = true;`;
  pool
    .query(query, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;