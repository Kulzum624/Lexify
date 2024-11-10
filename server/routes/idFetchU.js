const express = require("express");
const router = express.Router();
const db = require("../models");
const user = db.users;

router.post("/", async (req, res) => {
    try {
        const { lawyer_email } = req.body;


        const vUser = await user.findOne({
            where: { user_email: user_email}
          });
      
          if (vUser)
          {
          
            res.status(200).send({user_id : vUser.user_id});
          }else {
            res.status(400).send("id not found");
          }
        

    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});



module.exports = router;