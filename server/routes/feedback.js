const express = require("express");
const router = express.Router();
const db = require("../models");
const user = db.users;
const lawyer = db.lawyers;
const feedback = db.feedbacks;
const jwt = require("jsonwebtoken");
const allowedDomains = ["gmail.com", "cfd.nu.edu.pk", "yahoo.com"];

router.post("/", async (req, res) => {
    try {
        const { lawyerEmail, comment, overallRating } = req.body;
        const token = req.cookies.jwt;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const userId = verifyToken.user_id;
        
        const domain = lawyerEmail.split('@')[1];
        if (!allowedDomains.includes(domain)) {
          return res.status(402).json({ message: "Email domain not allowed" });
        }

        const existingUser = await user.findOne({
            where: { user_id: userId },
        });

        if (existingUser) {
            const existingLawyer = await lawyer.findOne({
                where: { lawyer_email: lawyerEmail },
            });

            if (existingLawyer) {
                const createFeedback = new feedback({
                    UserUserId: userId,
                    LawyerLawyerId: existingLawyer.lawyer_id,
                    comment: comment,
                    rating: overallRating

                });
                const created = await createFeedback.save();

                const feedbacks = await feedback.findAll({
                    where: { LawyerLawyerId: existingLawyer.lawyer_id },
                    attributes: ['rating'],
                });

                const totalRating = feedbacks.reduce((acc, feedback) => acc + feedback.rating, 0);
                const averageRating = totalRating / feedbacks.length;
                const roundedRating = Math.round(averageRating);

                
                await lawyer.update(
                    { lawyer_rating: roundedRating },
                    { where: { lawyer_id: existingLawyer.lawyer_id } }
                );

                res.status(200).send("Feedback added and lawyer rating updated");

            } 
            else{
                res.status(401).send("Feedback not saved");
            }

        }
       

    } catch (error) {
        console.error(error);
        res.status(400).send(error);

    }
});

module.exports = router;
