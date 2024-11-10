const express = require("express");
const router = express.Router();
const db = require("../models");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const user = db.users;
const admin = db.admins;
const lawyer = db.lawyers;

router.post("/", async (req, res) => {
  try {
    let isMatch = '';
    const user_email = req.body.email;
    const user_password = req.body.password;
    console.log("Request Received");

    const vUser = await user.findOne({
      where: { user_email: user_email, isVerified: true }
    });

    const vAdmin = await admin.findOne({
      where: { admin_email: user_email }
    });

    const vLawyer = await lawyer.findOne({
      where: { lawyer_email: user_email }
    });

    if (vUser) {
      isMatch = await bcryptjs.compare(user_password, vUser.user_password);
      if (isMatch) {
        const token = await vUser.generateToken();
        return res.cookie("jwt", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true
        }).status(200).json({ userType: "user", message: "User LoggedIn" });
      }
    }

    if (vAdmin) {
      isMatch = await bcryptjs.compare(user_password, vAdmin.admin_password);
      if (isMatch) {
        const token = await vAdmin.generateToken();
        return res.cookie("jwt", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true
        }).status(200).json({ userType: "admin", message: "Admin LoggedIn" });
      }
    }

    if (vLawyer) {
      isMatch = await bcryptjs.compare(user_password, vLawyer.lawyer_password);
      if (isMatch) {
        const token = await vLawyer.generateToken();
        return res.cookie("jwt", token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true
        }).status(200).json({ userType: "lawyer", message: "Lawyer LoggedIn", email: `${vLawyer.lawyer_email}` });
      }
    }

    res.status(400).send("Invalid Credentials");

  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});

module.exports = router;