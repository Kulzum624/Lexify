const db = require("../models");
const FreeSlot = db.slots;
const express = require('express');
const jwt = require('jsonwebtoken');


exports.findAll = async (req, res) => {
    const token = req.cookies.jwt;
    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const freeSlots = await FreeSlot.findAll({where:{LawyerLawyerId: verifyToken.lawyer_id}});
        res.status(200).json(freeSlots);
    } catch (error) {
        console.error('Error fetching free slots:', error);
        res.status(400).send(error);
    }
};


exports.create = async (req, res) => {
    const { day, slot } = req.body;
    const token = req.cookies.jwt;

    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const LawyerLawyerId = verifyToken.lawyer_id;

        const newFreeSlot = await FreeSlot.create({ day, slot, LawyerLawyerId });
        res.status(200).json(newFreeSlot);
    } catch (error) {
        console.error('Error creating free slot:', error);
        res.status(400).send(error.message || 'Invalid token');
    }
};


exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
        const freeSlot = await FreeSlot.findAll({ where: { LawyerLawyerId: id } });
        if (freeSlot) {
            res.status(200).json(freeSlot);
            console.log(freeSlot)
        } else {
            res.status(404).send('Free slot not found1');
        }
    } catch (error) {
        console.error('Error fetching free slot by ID:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.findByPk = async (req, res) => {
    const id = req.params.id;
    try {
        const freeSlot = await FreeSlot.findByPk(id);
        if (freeSlot) {
            res.status(200).json(freeSlot);
        } else {
            res.status(404).send('Free slot not found2');
        }
    } catch (error) {
        console.error('Error fetching free slot by ID:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    const { day, slot, date, status } = req.body;

    try {
        const [rowsUpdated] = await FreeSlot.update({ day, slot, date, status }, {
            where: { id: id },
            returning: true,
        });
        if (rowsUpdated > 0) {
            const updatedFreeSlot = await FreeSlot.findByPk(id);
            res.status(200).json(updatedFreeSlot);
        } else {
            res.status(404).send('Free slot not found');
        }
    } catch (error) {
        console.error('Error updating free slot:', error);
        res.status(500).send('Internal Server Error');
    }
};


exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedRows = await FreeSlot.destroy({
            where: { id: id },
        });
        if (deletedRows > 0) {
            res.status(200).send("Deleted");
        } else {
            res.status(404).send('Free slot not found');
        }
    } catch (error) {
        console.error('Error deleting free slot:', error);
        res.status(500).send('Internal Server Error');
    }
};