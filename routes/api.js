const express = require('express');
const router = express.Router();
const AxiosService = require("../services/axios.service");

router.get('/rsvpLookup', async function(req, res) {
  try {
    const name = req.query.name;
    const response = await AxiosService.mongoInstance.get("/endpoint/findRSVP", { 
      params: { name }
    });
    const { data } = response;
    res.status(200).send(data);
  } catch (error) {
    console.log("UNKNOWN ERROR: ", JSON.stringify(error));
    res.status(500);
    res.end();
  }
});

router.post('/rsvpUpdate', async function(req, res) {
  try {
    const rsvpData = req.body;
    const response = await AxiosService.mongoInstance.post("/endpoint/updateRSVP", rsvpData);
    const { data } = response;
    res.status(200).send(data);
  } catch (error) {
    console.log("UNKNOWN ERROR: ", JSON.stringify(error));
    res.status(500);
    res.end();
  }
});

module.exports = router;