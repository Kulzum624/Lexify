
const express = require('express');
const router = express.Router();

const freeslots = require("../controllers/freeSlot.controller.js");


router.get("/freeslots", freeslots.findAll);
router.get("/freeslot/:id", freeslots.findOne);
router.post("/freeslots", freeslots.create);
router.get("/freeslots/:id", freeslots.findByPk);
router.put("/freeslots/:id", freeslots.update);
router.delete("/freeslots/:id", freeslots.delete);


module.exports = router;
