import React, { useState } from 'react';
import { Link } from "react-router-dom"

// Types of Demo/Construction Waste: Brick, Concrete, Ferrous Metal, Masonry, Non-Ferrous Metal, Paper/Cardboard, Plastic, Timber, Glass, Rubber/Leather, Paints/Varnishes/Adhesives

// Types of Hazardous Waste: Asbestos, Chemicals (Brake fluid or printer toner), Batteries (household and car batteries) Solvents, Pesticides, Car Oil, Fluorescent Tubes, Electrical items (tvs and fridge/freezer)

// Types of Household Waste: Garbage, trash, and sanitary wastes in septic tanks and medical waste, that is derived from households, farms, or ranches. Household waste does not include trauma scene waste.

const SubmissionForm = ({ env }) => {
    const [submission, setSubmission] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);

    const senderEmail = 'sender@example.com';

    const handleCancel = () => {
        setSubmission('');
    };

    const handleChange = (event) => {
        setSubmission(event.target.value);
    };

    const handleSubmit = (event) => {
        <Link to={`/map/`} />

        const {
            REACT_APP_EMAILJS_RECEIVER: receiverEmail,
            REACT_APP_EMAILJS_TEMPLATEID: templateId,
            REACT_APP_EMAILJS_USERID: user,
        } = env;

        sendSubmission({
            templateId,
            senderEmail,
            receiverEmail,
            submission,
            user,
        });

        setFormSubmitted(true);
    };

    const sendSubmission = ({
        templateId,
        senderEmail,
        receiverEmail,
        submission,
        user,
    }) => {
        window.emailjs
            .send(
                'default_service',
                templateId,
                {
                    senderEmail,
                    receiverEmail,
                    submission,
                },
                user
            )
            .then((res) => {
                if (res.status === 200) {
                    setFormSubmitSuccessful(true);
                }
            })

            .catch((err) => console.error('Failed to send. Error: ', err));
    };

    if (formSubmitted && formSubmitSuccessful) {
        return <h3>Thank you, your submission was successful!</h3>;
    }

    return (
        <> <div id="title-id" className='title-class justify-content-center text-center'>
            <h1>Types of Hazardous Waste Submission Form</h1>
        </div>

            <div id="text-container" className="container-class">
                <div id="text-id" className="text-area">
                    <section id="text-card" className="txtclass-card justify-content-center" style={{ height: "200px" }}>
                        <h4 id="text-title" className="card-title text-center"></h4>
                        <p className="p-txt d-flex justify-content-center align-items-center"  style={{ height: "200px" }}>Use the form provided below to submit any 
                        hazardous waste you have in your possession.
                        This will bring you to a map of a local landfill 
                        or recycling center in the Jefferson County area that is able to accept and dispose of that specific material.</p>
                    </section>
                </div>
            </div>


            <form id="submission-id" className='submission-form d-flex' onSubmit={handleSubmit}>


                <div id="container-id" className="container">
                    <div class="row p-0">
                        <div className="col p-0">
                            <section id="page-card" className="card justify-content-center" style={{ height: "400px" }}>
                                <h3 id="card-title" className="card-title text-center">Demolition/Construction Waste</h3>
                                <p className="card-body text-center ">Brick, Concrete, Asphalt, Rubble, Tile, Ferrous Metal, Masonry, Non-Ferrous Metal, Paper, Cardboard, Plastic, Timber, Glass, Rubber, Leather, Paints, Varnishes, Adhesives, Lacquers</p>
                                <input className="check-box" id="check" type="checkbox" name="checkbox" />
                            </section>
                        </div>

                        <div className="col p-0">
                            <section id="page-card" className="card justify-content-center" style={{ height: "400px" }}>
                                <h3 id="card-title" className="card-title text-center">Hazardous Waste</h3>
                                <p className="card-body text-center ">Asbestos, Chemicals (Brake fluid or printer toner), Batteries (household and car batteries) Solvents, Pesticides, Car Oil, Fluorescent Tubes, Electrical items (tvs and fridge/freezer)</p>
                                <input className="check-box" id="check" type="checkbox" name="checkbox" />
                            </section>
                        </div>

                        <div className="col p-0">
                            <section id="page-card" className="card justify-content-center" style={{ height: "400px" }}>
                                <h3 id="card-title" className="card-title text-center">Household Waste</h3>
                                <p className="card-body text-center ">Garbage, trash, and sanitary wastes in septic tanks and medical waste, that is derived from households, farms, or ranches. Household waste does not include trauma scene waste.</p>
                                <input className="check-box" id="check" type="checkbox" name="checkbox" />
                            </section>
                        </div>
                    </div>
                </div>
            </form>

            <div className='group-btn'>
                <input type='submit' value='Submit' className='btn submitbtn' />
                <button className='btn cancelbtn' onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </>
    );
};

export default SubmissionForm;