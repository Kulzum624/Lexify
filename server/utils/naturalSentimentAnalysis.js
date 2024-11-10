const natural = require('natural');
const { removeStopwords } = require('stopword');

const SentimentAnalyzer = natural.SentimentAnalyzer;
const PorterStemmer = natural.PorterStemmer;
const WordTokenizer = natural.WordTokenizer;

function getSentiment(text) {
    const alphaOnlyReview = text.replace(/[^a-zA-Z\s]+/g, '');
    const tokenizer = new WordTokenizer();
    const tokenizedText = tokenizer.tokenize(alphaOnlyReview);
    const filteredText = removeStopwords(tokenizedText);

    const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
    return analyzer.getSentiment(filteredText);
}

module.exports = getSentiment;
