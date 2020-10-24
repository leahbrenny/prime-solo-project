const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log('in search router get', req.params.id);
    const fetch = require('node-fetch');
  
    (async () => {
      const response = await fetch(
        `https://trefle.io/api/v1/plants/${req.params.id}?token=${process.env.YOUR_TREFLE_TOKEN}`
      );
      const json = await response.json();
      res.send(json);
    })();
  });

  

module.exports = router;