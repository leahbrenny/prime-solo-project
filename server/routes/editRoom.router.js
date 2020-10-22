const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('body in edit room GET', req.params.id);
  //query selects plant img html and plant name for user
  let query = `SELECT "room"."room_name" as "name",
  "room"."light" as "sunlight",
  "room"."humidity" as "humidity",
  "room"."id" as "id"
  FROM "room"
  WHERE "room"."id" = $1;`;
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

router.put('/:id', (req, res) => {
  console.log('in editroom put', req.body);
  let query = `UPDATE "room"
  SET "room_name" = $2, "light" = $3, "humidity" = $4
  WHERE "room"."id" = $1;`;
  pool
    .query(query, [
      req.body.room_id,
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
})


module.exports = router;