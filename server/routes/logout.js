const express = require("express");
const router = express.Router();
const db = require("../models");
const cookieParser = require('cookie-parser');




router.get('/', (req,res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("Logged Out")
   })


   module.exports = router;