const jwt = require('jsonwebtoken');

const userType = async (req, res, next) => {
    try {
        //Getting Cookies
        const token = req.cookies.jwt;
        if (!token) {
            res.status(401).send("No token")
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            if (verifyToken.user_id) {

                    res.status(200).json({ id: verifyToken.user_id, userType: "user" });
            }else if (verifyToken.admin_id) {

                    res.status(200).json({ id: verifyToken.admin_id, userType: "admin" });
            }else if (verifyToken.lawyer_id) {

                    res.status(200).json({ id: verifyToken.lawyer_id, userType: "lawyer" });
            }
            else {
                res.status(401).json({ id: 0 });
            }
        }

        next()
    } catch (error) {
        res.status(401).send("Error")
        console.log(error);
    }

}

module.exports = userType