const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('body in room GET', req.user.id);
  //query selects plant img html and plant name for user
  let query = `SELECT  "room"."room_name" as "room",
  "room"."id" as "id"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  WHERE "user"."id" = $1;`;
  pool
    .query(query, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
  console.log('in room delete', req.params);
  let query = `DELETE FROM "room"
  WHERE "room"."id" = $1;`;
  pool
    .query(query, [Number(req.params.id)])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
