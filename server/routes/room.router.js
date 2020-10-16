const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('body in room GET', req.body, req.params.id);
  //query selects plant img html and plant name for user
  let query = `SELECT  "room"."room_name" as "room"
  FROM "user"
  JOIN "room" ON "user"."id" = "room"."user_id"
  WHERE "user"."id" = $1;`;
  pool.query(query, [req.params.id]).then( result => {
    res.send(result.rows);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

module.exports = router;