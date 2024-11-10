import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserFeedback = () => {
    // const navigate = useNavigate();
    const [lawyerEmail, setLawyerEmail] = useState('');
    const [comment, setComment] = useState('');
    const [sentiment, setSentiment] = useState(null);
    // const [averagePolarity, setAveragePolarity] = useState(null);
    const [overallStarRating, setOverallStarRating] = useState(null);
    const [overallRating, setOverallRating] = useState(null);


    const handleSubmit2 = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch("/save-feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    lawyerEmail,
                    comment,
                    overallRating,

                }),
            });

            if (res.status === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'submited',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                // window.alert("submited");
                setLawyerEmail('');
                setComment('');

            } else if (res.status === 401) {
                
                  Swal.fire({
                    title: 'Error!',
                    text: 'Lawyer Does not exists',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
                // window.alert("Lawyer Does not exists");
            }
            else if (res.status === 402) {
                
                  Swal.fire({
                    title: 'Error!',
                    text: 'Email domain not allowed',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
                // window.alert("Email domain not allowed");
            }
            
            else {
                window.alert("...");
            }
        } catch (error) {
            console.error(error);
        }
    };

    window.addEventListener('unhandledrejection', function (event) {
        console.warn('Unhandled promise rejection:', event.reason);
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (comment.trim() === '' || !/^[a-zA-Z0-9\s\/\.,!?:]+$/g.test(comment)) {
            window.alert("Invalid comment!");
            return;
        }

        try {
            const res = await fetch("http://127.0.0.1:5000/analyze_sentiment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    comment: [`${comment}`],
                    lawyerEmail: [`${lawyerEmail}`],

                }),
            });

            if (res.status === 200) {
                const result = await res.json();
                const { overall_rating, overall_sentiment, overall_star_rating } = result;
                setSentiment(overall_sentiment);
                // setAveragePolarity(average_polarity);
                setOverallStarRating(overall_star_rating);
                setOverallRating(overall_rating);
                handleSubmit2(event);

            } else if (res.status === 401) {
               
                  Swal.fire({
                    title: 'Error!',
                    text: 'Invalid comment',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
                // window.alert("Invalid comment");
            }
            else {
               
                  Swal.fire({
                    title: 'Error!',
                    text: 'Error doing Sentiment',
                    icon: 'error',
                    confirmButtonText: 'ok'
                  })
                // window.alert("Error doing Sentiment");
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="max-w-3xl mx-auto mt-10 p-8 rounded-lg form">
            <h1 className="text-2xl text-center font-semibold text-white">Provide Your Feedback</h1>
            <form onSubmit={handleSubmit} className="ml-2 mb-2 space-y-4 mt-8">
                <label className="block">
                    <span className="text-white font-semibold">Lawyer Email:</span>
                    <input
                        pattern="[\w\.-]+@(gmail\.com|cfd\.nu\.edu\.pk|yahoo\.com)"
                        type="email"
                        value={lawyerEmail}
                        onChange={(e) => setLawyerEmail(e.target.value)}
                        name="lawyerEmail"
                        placeholder="Enter lawyer's email"

                        required
                        className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                </label>
                <label className="block">
                    <span className="text-white font-semibold">Comment:</span>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Enter your feedback here"
                        required

                        className="mt-1 block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                    />
                </label>
                <button
                    type="submit"
                    className="bg-gray-600 text-white rounded-md px-4 py-2 hover:bg-gray-800"
                >
                    Submit
                </button>
            </form>
            {sentiment && (
                <div className="mt-4 ml-2 mb-2 ">
                    <h2 className="text-lg font-semibold text-white">Feedback Analysis:</h2>
                    <p className=" text-white">{`Your feedback is     : ${sentiment}`}</p>
                    <p className=" text-white">{`Star Rating of lawyer: ${overallStarRating}`}</p>
                </div>
            )}
        </div>
    );
};

export default UserFeedback;
