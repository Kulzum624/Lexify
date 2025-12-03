const nodemailer = require("nodemailer");

module.exports=async (email,subject,text)=>
{
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port : Number(process.env.EMAIL_PORT),
            secure :Boolean(process.env.SECURE),
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
            }
        });
        await transporter.sendMail({
            from:'"Welcome to Lexify" <lexify@gmail.com>',
            to:email,
            subject:subject,
            text:text
        });
        console.log("EMAIL SENT");
    } catch (error) {
        console.log("EMAIL NOT SENT");
        console.log(error);
    }


}