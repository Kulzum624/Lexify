//It will be checked before the response
const jwt = require('jsonwebtoken');
const db = require("../models/index");
const Users = db.users;
const Admin = db.admins;
const Lawyer = db.lawyers;

const authenticate = async (req, res, next) => {
    try {
        //Getting Cookies
        const token = req.cookies.jwt;
        if (!token) {
            res.status(401).send("No token")
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            if (verifyToken.user_id) {
                const user = await Users.findOne({ user_id: verifyToken.user_id, "tokens.token": token });
                if (user) {
                    req.user = user;
                    res.status(200).json({ status: "Authorized User", userType: "user" });
                }
            } else if (verifyToken.admin_id) {
                const admin = await Admin.findOne({ admin_id: verifyToken.admin_id, "tokens.token": token });
                if (admin) {
                    req.admin = admin;
                    res.status(200).json({ status: "Authorized Admin", userType: "admin" });
                }
            } else if (verifyToken.lawyer_id) {
                const lawyer = await Lawyer.findOne({ where: { lawyer_id: verifyToken.lawyer_id } });
                if (lawyer) {
                    req.lawyer = lawyer;
                    res.status(200).json({ status: "Authorized Lawyer", userType: "lawyer", email: `${lawyer.lawyer_email}` });
                }

            }
            else {
                res.status(401).json({ status: "User not found or invalid token" });
            }
        }

        next()
    } catch (error) {
        res.status(401).send("Error")
        console.log(error);
    }

}

module.exports = authenticate