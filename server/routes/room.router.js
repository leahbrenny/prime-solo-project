const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('body in room GET', req.body, req.params.id);
  //query selects plant img html and plant name for user
  let query = `SELECT  "room"."room_name" as "room",
  "room"."id" as "id"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  WHERE "user"."id" = $1;`;
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

router.post('/:id', (req, res) => {
  console.log('in room post', req.body);
  let query = `INSERT INTO "room" ("user_id", "room_name", "light", "humidity")
  VALUES ($1, $2, $3, $4);`;
  pool
    .query(query, [
      req.body.user_id,
      req.body.roomName,
      req.body.sunlight,
      req.body.humidity,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
