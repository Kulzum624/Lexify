const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const crypto =require("crypto");
const db = require("../models");
const user = db.lawyers;
const meeting =db.meetings;


router.post("/", async (req, res) => {
    try {
        const { user_email, lawyer_email, date, name ,code,time } = req.body;


        const vUser = await user.findOne({
            where: { user_email: lawyer_email}
          });
      
          if (vUser)
          {
            // const createMeeting =new meeting({
            //   user_email : user_email,
            //   lawyer_email : lawyer_email,
            //   lawyer_name : name,
            //   date : date,
            //   time : time

            // });
            // const created = await createMeeting.save();


            sendEmail(
              user_email,
              'Response To Appointment',
              `Dear user,\n\n${name} (${lawyer_email}) has accepted your request of appointment  for ${date}, at sharp :${time}.\nPlease login to the website to join the meeting using this meeting ID: ${code}.\n\nThank you.`
            );
          
            res.status(200).send("Response sent to user's email.");
          }else {
            res.status(400).send("Invalid Mail");
          }
        

    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});



module.exports = router;