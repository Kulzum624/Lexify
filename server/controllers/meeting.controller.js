const db = require("../models");
const MeetingRecord = db.meetings;
const jwt = require('jsonwebtoken');
const user = db.users;
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");


exports.findAll = async (req, res) => {
    const { lawyer_email } = req.query;
    console.log('lawyer_email:', lawyer_email);
    try {
        const meetingRecords = await MeetingRecord.findAll({ where: { lawyer_email: lawyer_email } });
        res.status(200).json(meetingRecords);
        console.log('records:', meetingRecords);
    } catch (error) {
        console.error('Error fetching meeting records:', error);
        res.status(400).json({ error: 'Failed to fetch meeting records' });
    }
};

exports.create = async (req, res) => {
    const { lawyer_name, lawyer_email, date, day, slot, status } = req.body;
    const token = req.cookies.jwt;

    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const UserUserId = verifyToken.user_id;
        const newMeetingRecord = await MeetingRecord.create({ lawyer_name, lawyer_email, date, day, slot, status, UserUserId });
        res.status(200).json(newMeetingRecord);
    } catch (error) {
        console.error('Error creating meeting record:', error);
        res.status(400).send(error);
    }
};

exports.findByPk = async (req, res) => {
    const meetingId = req.params.id;
    try {
        const meetingRecord = await MeetingRecord.findByPk(meetingId);
        if (meetingRecord) {
            res.status(200).json(meetingRecord);
        } else {
            res.status(404).send('Meeting record not found');
        }
    } catch (error) {
        console.error('Error fetching meeting record by ID:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.update = async (req, res) => {
    const meetingId = req.params.id;
    const { lawyer_name, lawyer_email, date, day, slot, status } = req.body;
    const code = crypto.randomBytes(4).toString('hex');
    try {
        const [rowsUpdated, updatedMeetingRecords] = await MeetingRecord.update(
            { lawyer_name, lawyer_email, date, day, slot, status },
            { where: { meeting_id: meetingId }, returning: true }
        );

        console.log(updatedMeetingRecords[0].UserUserId);

        const vUser = await user.findOne({
            where: { user_id: updatedMeetingRecords[0].UserUserId }
        });

        if (vUser) {

            sendEmail(
                vUser.user_email,
                'Appointment Confirmed',
                `Dear User,\n\n${updatedMeetingRecords[0].lawyer_name} (${updatedMeetingRecords[0].lawyer_email}) has confirmed an appointment with you for day: ${updatedMeetingRecords[0].day} date: ${updatedMeetingRecords[0].date} time: ${updatedMeetingRecords[0].slot}. Please login to the website and join using code: ${code} the meeting.\n\nThank you.`
            );
        }

        if (code) {
            sendEmail(
                updatedMeetingRecords.lawyer_email,
                'Meeting Detail',
                `Dear Lawyer,\n\nYou Confirmed meeting with ${vUser.user_name} (${vUser.user_email}) for day: ${updatedMeetingRecords[0].day} date: ${updatedMeetingRecords[0].date} time: ${updatedMeetingRecords[0].slot}. Use this code: ${code} to join meeting.\n\nThank you.`
            );
        }



        if (rowsUpdated > 0) {
            res.status(200).json(code);
        } else {
            res.status(404).send('Meeting record not found');
        }
    } catch (error) {
        console.error('Error updating meeting record:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.delete = async (req, res) => {
    const meetingId = req.params.id;
    try {
        const deletedRows = await MeetingRecord.destroy({ where: { meeting_id: meetingId } });
        if (deletedRows > 0) {
            res.status(200).send();
        } else {
            res.status(404).send('Meeting record not found');
        }
    } catch (error) {
        console.error('Error deleting meeting record:', error);
        res.status(500).send('Internal Server Error');
    }
};

