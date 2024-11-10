from flask import Flask, request, jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
analyzer = SentimentIntensityAnalyzer()

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    comments = data.get('comment', [])
    print("Received comments:", comments)

    total_polarity = 0
    for comment in comments:
        sentiment_score = analyzer.polarity_scores(comment)['compound']
        total_polarity += sentiment_score
    # print("Polarity:", total_polarity)

    if len(comments) > 0:
        average_polarity = total_polarity / len(comments)
    else:
        average_polarity = 0

    average_polarity = round(average_polarity, 3)

    overall_sentiment = get_sentiment_label(average_polarity)
    overall_star_rating = get_star_rating(average_polarity)
    overall_rating = get_rating(average_polarity)
    # print("AVG.Polarity:", average_polarity)
    return jsonify({
        'average_polarity': average_polarity,
        'overall_sentiment': overall_sentiment,
        'overall_star_rating': overall_star_rating,
        'overall_rating': overall_rating
    })

def get_sentiment_label(polarity):
    if polarity > 0.5:
        return "very positive"
    elif polarity > 0:
        return "positive"
    elif polarity == 0:
        return "neutral"
    elif polarity < -0.5:
        return "very negative"
    else:
        return "negative"

def get_star_rating(polarity):
    if polarity >= 0.6:
        return "★★★★★"
    elif polarity >= 0.4:
        return "★★★★☆"
    elif polarity >= 0.3:
        return "★★★☆☆"
    elif polarity >= 0.2:
        return "★★☆☆☆"
    else:
        return "★☆☆☆☆"

def get_rating(polarity):
    if polarity >= 0.6:
        return "5"
    elif polarity >= 0.4:
        return "4"
    elif polarity >= 0.3:
        return "3"
    elif polarity >= 0.2:
        return "2"
    else:
        return "1"        

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
