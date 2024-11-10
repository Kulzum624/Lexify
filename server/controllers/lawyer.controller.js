const express = require('express');
const db = require("../models");
const Lawyer = db.lawyers;
const Speciality = db.specialitys;
const { Op } = require('sequelize');
const router = express.Router();
const sendEmail =require("../utils/sendEmail");
const jwt = require('jsonwebtoken');

exports.findAll = async (req, res) => {
    try {
        const lawyers = await Lawyer.findAll({
            include: [{ model: Speciality, as: 'specialities' }],
        });
        res.status(200).json(lawyers);
    } catch (error) {
        console.error('Error fetching lawyers:', error);
        res.status(400).send(error);
    }
};


exports.create = async (req, res) => {
    const { speciality_name, description, ...lawyerData } = req.body;
    const token = req.cookies.jwt;

    try {
        if (!token) {
            res.status(401).send("No token");
        } else {
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const AdminAdminId = verifyToken.admin_id;

            sendEmail(lawyerData.lawyer_email, 'Credientials For Login', `Your email is: ${lawyerData.lawyer_email}, Your password is: ${lawyerData.lawyer_password}`);

            const newLawyer = await Lawyer.create({ ...lawyerData, AdminAdminId:AdminAdminId });

            if (speciality_name && description) {
            
                const newSpeciality = await Speciality.create({
                    speciality_name,
                    description,
                    LawyerLawyerId: newLawyer.lawyer_id,
                });
            }

            const updatedLawyer = await Lawyer.findByPk(newLawyer.lawyer_id, {
                include: [{ model: Speciality, as: 'specialities' }],
            });

            console.log(updatedLawyer);
            res.status(201).json(updatedLawyer);
        }
    } catch (error) {
        console.error('Error adding lawyer:', error);
        res.status(400).send(error);
    }
};


exports.findByPk = async (req, res) => {
    const lawyerId = req.params.lawyerId;
    try {
        const lawyer = await Lawyer.findByPk(lawyerId, {
            include: [{ model: Speciality, as: 'specialities' }],
        });

        if (lawyer) {
            res.status(200).json(lawyer);
        } else {
            res.status(404).send('Lawyer not found');
        }
    } catch (error) {
        console.error('Error fetching lawyer by ID:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.viewLawyers = async (req, res) => {
    try {
        const { method, value } = req.query;

        let whereClause = {};
        switch (method) {
            case 'speciality':
                whereClause = {
                    '$specialities.speciality_name$': {
                        [db.Sequelize.Op.iLike || db.Sequelize.Op.like]: `%${value}%`,
                    },
                };
                break;
            case 'name':
                whereClause = {
                    lawyer_name: {
                        [db.Sequelize.Op.iLike || db.Sequelize.Op.like]: `%${value}%`,
                    },
                };
                break;
            case 'rating':
                whereClause = {
                    lawyer_rating: {
                        [db.Sequelize.Op.gte]: parseInt(value, 10) || 0,
                    },
                };
                break;
            default:
                // Handle default case or return an error
                return res.status(400).json({ error: 'Invalid filtering method' });
        }

        console.log('Method:', method);
        console.log('Value:', value);
        console.log('Where Clause:', whereClause);

        const lawyers = await Lawyer.findAll({
            include: [{ model: Speciality, as: 'specialities' }],
            where: whereClause,
        });

        res.json(lawyers);
    } catch (error) {
        console.error('Error fetching lawyers:', error);
        res.status(500).send('Internal Server Error');
    }
};



  exports.update = async (req, res) => {
    const lawyerId = req.params.lawyerId;
    try {
        const [rowsUpdated, updatedLawyers] = await Lawyer.update(req.body, {
            where: { lawyer_id: lawyerId },
            returning: true,
        })
        
        
        if (rowsUpdated >= 0) {
            const updatedLawyer = updatedLawyers[0]; 
            if (req.body.speciality_name || req.body.description) {
                await Speciality.update(
                    { speciality_name: req.body.speciality_name, description: req.body.description },
                    { where: { LawyerLawyerId: lawyerId },
                    returning: true, }
                    
                );
            }
        
            res.status(200).json(updatedLawyer);
        } else {
            res.status(404).send('Lawyer not found');
        }
        
    } catch (error) {
        console.error('Error updating lawyer:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.delete = async (req, res) => {
    const lawyerId = req.params.lawyerId;
    try {
        const deletedRows = await Lawyer.destroy({
            where: { lawyer_id: lawyerId },
        });

        await Speciality.destroy({ where: { LawyerLawyerId: lawyerId } });

        if (deletedRows > 0) {
            res.status(200).send();
        } else {
            res.status(404).send('Lawyer not found');
        }
    } catch (error) {
        console.error('Error deleting lawyer:', error);
        res.status(500).send('Internal Server Error');
    }
};