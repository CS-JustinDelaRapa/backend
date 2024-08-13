const express = require('express');
const router = express.Router();
const History = require('../models/history');

router.get('/history', async (req, res) => {
    try {
        const histories = await History.find({}).sort({createdAt: 1});
        res.status(200).json(histories);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

router.post('/history', async (req, res) => {
    try {
        const history = await History.create(req.body);
        res.status(200).json(history);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

module.exports = router;