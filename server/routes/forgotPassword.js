// routes/verifyOtp.js
const express = require("express");
const router = express.Router();
const db = require("../models");
const user = db.users;
const lawyer = db.lawyers;
const sendEmail =require("../utils/sendEmail");
const crypto =require("crypto");
const bcryptjs = require('bcryptjs');

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    
    const existingUser = await user.findOne({
      where: { user_email: email },
    });

    if (!existingUser) 
    {
      const existingLawyer = await lawyer.findOne({
        where: { lawyer_email: email },
      });
  
      if (!existingLawyer) {
        return res.status(400).send("Not found");
      }else
      {
      const pass = generateSecurePassword();
  
      const hashedPassword = await bcryptjs.hash(pass, 10);
  
      sendEmail(email, 'Lexify Password Reset', `Your Password is: ${pass}`);
      //Update Password
      await lawyer.update(
          { lawyer_password: hashedPassword },
          { where: { lawyer_email: email } }
        );
  
      res.status(200).send("Password updated and mail is sent");
      }


    }
    
    else
    {
    const pass = generateSecurePassword();

    const hashedPassword = await bcryptjs.hash(pass, 10);

    sendEmail(email, 'Lexify Password Reset', `Your Password is: ${pass}`);
    //Update Password
    await user.update(
        { user_password: hashedPassword },
        { where: { user_email: email } }
      );

    res.status(200).send("Password updated and mail is sent");
    }
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
 
}
});

// Function to generate a secure random password
function generateSecurePassword() {
    const length = 8; 
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let securePassword = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = crypto.randomInt(characters.length);
      securePassword += characters.charAt(randomIndex);
    }
  
    return securePassword;
  }

module.exports = router;
