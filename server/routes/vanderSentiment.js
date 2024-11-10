// const express = require("express");
// const router = express.Router();
// const { SentimentIntensityAnalyzer } = require('vader-sentiment');

// const analyzer = new SentimentIntensityAnalyzer();

// router.post("/", async (req, res) => {
//     try {
//         const  comment  = req.body.comment;
//         if (!comment || typeof comment !== 'string') {
//             return res.status(401).json({ error: 'Invalid input' });
//         }

//         const { compound } = analyzer.polarity_scores(comment);

//         let overallSentiment;
//         if (compound > 0.5) {
//             overallSentiment = 'very positive';
//         } else if (compound > 0) {
//             overallSentiment = 'positive';
//         } else if (compound === 0) {
//             overallSentiment = 'neutral';
//         } else if (compound < -0.5) {
//             overallSentiment = 'very negative';
//         } else {
//             overallSentiment = 'negative';
//         }

//         const getStarRating = polarity => {
//             if (polarity >= 0.8) {
//                 return '★★★★★';
//             } else if (polarity >= 0.6) {
//                 return '★★★★☆';
//             } else if (polarity >= 0.4) {
//                 return '★★★☆☆';
//             } else if (polarity >= 0.2) {
//                 return '★★☆☆☆';
//             } else {
//                 return '★☆☆☆☆';
//             }
//         };

//         const overallStarRating = getStarRating(compound);
//         res.status(200).json({
//             averagePolarity: compound,
//             overallSentiment,
//             overallStarRating,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(400).send(error);
//     }
// });

// module.exports = router;




