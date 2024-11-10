const express = require('express');
const db = require("../models");
const User = db.users;
const router = express.Router();


exports.findAll = async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.create = async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.findByPk = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.update = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findByPk(userId);
      
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.update(req.body);
      const updatedUser = await User.findByPk(userId); // Fetch updated user data
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.delete = async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  

