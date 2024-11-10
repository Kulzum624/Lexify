const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const crypto =require("crypto");
const db = require("../models");
const user = db.users;


router.post("/", async (req, res) => {
    try {
        const user_email = req.body.email;

        const vUser = await user.findOne({
            where: { user_email: user_email}
          });
      
          if (vUser)
          {
            const otp = crypto.randomBytes(4).toString('hex');
            sendEmail(user_email, 'OTP Verification', `Your OTP is: ${otp}`);
            await user.update(
                { otp: otp },
                { where: { user_email: user_email } }
              );
          
            res.status(200).send("OTP sent to your email.");
          }else {
            res.status(400).send("Invalid Mail");
          }
        

    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});



module.exports = router;