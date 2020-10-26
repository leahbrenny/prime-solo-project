const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('body in edit room GET', req.params.id);
  //query selects plant img html and plant name for user
  let query = `SELECT "plant"."plant_name" as "name",
  "plant"."id" as "id",
  "plant"."plant_img" as "img",
  "plant"."last_watered" as "last_watered"
  FROM "plant"
  WHERE "plant"."id" = $1;`;
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
  console.log('in editplant put', req.body);
  let query = `UPDATE "plant"
  SET "plant_name" = $2,
  "plant_img" = $3,
  "last_watered" = $4
  WHERE "plant"."id" = $1;`;
  pool
    .query(query, [
      req.body.plant_id,
      req.body.plant_name,
      req.body.plant_img,
      req.body.last_watered
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