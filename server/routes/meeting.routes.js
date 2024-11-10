const express = require('express');
const router = express.Router();

const meetingrecords = require("../controllers/meeting.controller.js");

router.get("/meetingrecords", meetingrecords.findAll);
router.post("/meetingrecords", meetingrecords.create);
router.get("/meetingrecords/:id", meetingrecords.findByPk);
router.put("/meetingrecords/:id", meetingrecords.update);
router.delete("/meetingrecords/:id", meetingrecords.delete);

module.exports = router;
