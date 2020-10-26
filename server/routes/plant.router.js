const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('body in plant GET', req.params.id);
  //query selects plant img, plant name, and id for user
  let query = `SELECT  "plant"."plant_img" as "image",
  "plant"."plant_name" as "plant",
  "plant"."id" as "id",
  "plant"."last_watered" as "last_watered"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  JOIN "plant" ON "plant"."room_id" = "room"."id"
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

router.post('/', (req, res) => {
  console.log('in plant POST', req.body);
  let query = `INSERT INTO "plant" ("room_id", "plant_name", "plant_img")
  VALUES ($1, $2, $3);`;
  pool
    .query(query, [
      req.body.roomId,
      req.body.name,
      req.body.image,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  console.log('in plant delete', req.params);
  let query = `DELETE FROM "plant"
  WHERE "plant"."id" = $1;`;
  pool.query(query, [Number(req.params.id)])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  });
});

router.put('/:id', (req, res) => {
  console.log('in editplant put', req.body);
  let query = `UPDATE "plant"
  SET "last_watered" = $2
  WHERE "plant"."id" = $1;`;
  pool
    .query(query, [
      req.body.id,
      req.body.date
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})


module.exports = router;
