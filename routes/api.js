const express = require('express');
const router = express.Router();

router.get('/rsvps', function(req, res) {
  res.status(200).send([]);
});

router.get('/gallery', function(req, res) {
  res.status(200).send("success!");
})

module.exports = router;