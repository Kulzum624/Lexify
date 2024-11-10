// routes/verifyOtp.js
const express = require("express");
const router = express.Router();
const db = require("../models");
const user = db.users;

router.post("/", async (req, res) => {
  try {
    const { email, otp } = req.body;
    
    const existingUser = await user.findOne({
      where: { user_email: email, otp: otp },
    });

    if (!existingUser) {
      return res.status(400).send("Invalid OTP.");
    }

    // Mark the user as verified
    existingUser.isVerified = true;
    await existingUser.save();

    res.status(200).send("Email verified. You can now register.");
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

module.exports = router;
