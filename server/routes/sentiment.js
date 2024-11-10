const express = require("express");
const router = express.Router();
const getSentiment = require("../utils/naturalSentimentAnalysis");

router.post("/", async (req, res) => {
    try {
        const text = req.body.comment; 
        const result = await getSentiment(text);
        if (result) {
            res.status(200).json({ result: result });
        } else {
            res.status(400).send("Unable to do Sentiment Analysis");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
});

module.exports = router;
