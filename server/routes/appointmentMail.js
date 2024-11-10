const express = require("express");
const router = express.Router();
const sendEmail = require("../utils/sendEmail");
const db = require("../models");
const meeting = db.meetings;
const user =db.users;
const crypto =require("crypto");
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');




router.post("/", async (req, res) => {
  const token = req.cookies.jwt;
  const otp = crypto.randomBytes(4).toString('hex');
      
    try {
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const { lawyer_id,
          lawyer_email,
          lawyer_name,
          day,
          slot } = req.body;
          
        const closestDate = findClosestDate(`${day}`);
        

        const vUser = await user.findOne({
          where: { user_id: verifyToken.user_id}
        });


  
          const createMeeting =new meeting({
              UserUserId : verifyToken.user_id,
              lawyer_email : lawyer_email,
              lawyer_name : lawyer_name,
              day : day,
              slot : slot,
              date : closestDate,
              status: true

             });
            const created = await createMeeting.save();

          
            
          
      
          if (created)
          {
            sendEmail(
              lawyer_email,
              'Appointment Request',
              `Dear Lawyer,\n\n${vUser.user_name} (${vUser.user_email}) has booked an appointment with you for day: ${day} date: ${closestDate} time: ${slot}. Please login(http://localhost:3000/login) to the website to confirm the meeting.\n\nThank you.`
            );
          
            res.status(200).send("Request sent to lawyer's email.");
          }else {
            res.status(400).send("Invalid Mail");
          }
        

    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});


function findClosestDate(day) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const targetDayIndex = daysOfWeek.indexOf(day);
  if (targetDayIndex === -1) {
      throw new Error('Invalid day input');
  }

  const today = dayjs();
  const currentDayIndex = today.day();

  let daysToAdd = targetDayIndex - currentDayIndex;
  if (daysToAdd <= 0) {
      daysToAdd += 7;
  }

  const closestDate = today.add(daysToAdd, 'day');
  return closestDate.format('YYYY-MM-DD');
}


module.exports = router;