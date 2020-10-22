const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config;

router.get('/:search', (req, res) => {
  console.log('in search router get', req.params.search);
  const fetch = require('node-fetch');

  (async () => {
    const response = await fetch(
      `https://trefle.io/api/v1/plants/search?token=${process.env.YOUR_TREFLE_TOKEN}&q=${req.params.search}`
    );
    const json = await response.json();
    res.send(json);
  })();
});

module.exports = router;
