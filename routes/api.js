var express = require('express');
var router = express.Router();

router.get('/rsvps', function(req, res) {
  res.send('Here are your rsvps!');
});

module.exports = router;