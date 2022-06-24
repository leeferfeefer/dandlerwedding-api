const express = require('express');
const router = express.Router();
const { readGalleryImage } = require("../services/gallery.service");

router.get('/rsvps', function(req, res) {
  res.status(200).send([]);
});

router.get('/gallery', async function(req, res) {
  try {
    const images = await readGalleryImage();
    res.status(200).send(JSON.stringify(images));
  } catch (error) {
    res.status(500).send("error!");
  }
})

module.exports = router;