import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const SingleReview = () => {
    const navigate = useNavigate();
    const [review, setReview] = useState({});
    const [message, setMessage] = useState("")
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/api/reviews/${id}`)
            .then(res => res.json())
            .then(review => {
                setMessage(review[0].review);
                setReview(review[0]);
            })
            .catch(err => console.log(err));
    }, []);

    const handleMessageChange = e => setMessage(e.target.value);

    const deleteReview = id => {
        fetch(`http://localhost:3000/api/reviews/${id}`, { method: "DELETE" })
            .then(res => res.ok ? navigate("/reviews") : null)
            .catch(err => console.log(err));
    };

    const editReview = (id, review) => {
        const editReviewBody = {
            review: review
        };

        fetch(`http://localhost:3000/api/review/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editReviewBody)
        })
            .then(res => res.ok ? navigate("/reviews") : null)
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="container text-body text-center">
                <div className="row">
                    <div className="col-12 p-0">
                        <nav>
                            <img
                                className="banner"
                                src="../assets/banner.jpg"
                                alt="logo for awesome site yay"
                            />
                            <h1>Ghibli Chirpr</h1>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group mb-2">
                        <textarea
                            className="form-control mb-2"
                            aria-label="With textarea"
                            placeholder="(500 characters max)"
                            value={message}
                            onChange={handleMessageChange}
                            cols="30"
                            rows="10"
                        ></textarea>
                        <button className="btn btn-dark mx-2" onClick={() => edit(id, message)}>
                            Save
                        </button>
                        <button className="btn btn-dark mx-2" onClick={() => deleteChirp(id)}>
                            Delete Chirp
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SingleReview;