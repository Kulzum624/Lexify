const express = require("express");
const router = express.Router();
const db = require("../models");
const sendEmail =require("../utils/sendEmail");
const crypto =require("crypto");
const user = db.users;

const allowedDomains = ["gmail.com", "nu.edu.pk", "yahoo.com"];

  router.post("/", async (req, res) => {
    try{
      const user_password = req.body.password;
      const user_address = req.body.address;
      const user_cnic_no = req.body.cnic;
      const user_contact = req.body.contact;
      const user_email = req.body.email;
      const user_name = req.body.name; 
  
      console.log("Request Received");

      const domain = user_email.split('@')[1];
      if (!allowedDomains.includes(domain)) {
        return res.status(401).json({ message: "Email domain not allowed" });
    }

      const otp = crypto.randomBytes(4).toString('hex');
  
      const createUser =new user({
        user_address : user_address,
        user_cnic_no : user_cnic_no,
        user_contact : user_contact,
        user_email : user_email,
        user_name : user_name,
        otp: otp,
        user_password : user_password
      });
      const created = await createUser.save();
      sendEmail(user_email, 'OTP Verification', `Your OTP is: ${otp}`);
  
      
      

      console.log(created);
       res.status(200).send("OTP sent to your email. Verify before registering.");

    } catch (error) {
      console.error(error); 
      res.status(400).send(error);
    }
  });
  

// router.get('/add',(req,res) =>
// {
//     const data={
//         user_address : "user_address",
//       user_cnic_no : "6376287637328",
//       user_contact : "03056150420",
//       user_email : "email3@gmail.com",
//       user_name : "user_name",
//       user_password : "user_password"
//     }
//     let {user_address,user_cnic_no,user_contact ,user_email ,user_name ,user_password   }=data;
//     //Insert
//     user.create({
//         user_address,user_cnic_no,user_contact ,user_email ,user_name ,user_password 
//     })
//     .then(register => res.redirect('/'))
//     .catch(err => console.log(err));
// });

module.exports = router;