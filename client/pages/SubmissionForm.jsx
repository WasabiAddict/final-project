import React, { useState } from 'react';
import { Link } from "react-router-dom"


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
        <>
            <div id="title-id" className='title-class d-flex justify-content-center align-items-center text-center'>
                <h1 id="title-size ">Types of Hazardous Waste Submission Form</h1>
            </div>

            <div id="text-container" className="container-class">
                <div id="text-id" className="text-area">
                    <section id="text-card" className="txtclass-card justify-content-center" style={{ height: "200px" }}>
                        <h4 id="text-title" className="card-title text-center"></h4>
                        <p className="p-txt d-flex justify-content-center align-items-center text-center" style={{ height: "180px" }}>
                            Use the form provided below to submit any type of <br />
                            hazardous waste you have in your possession.<br />
                            This will bring you to a map of a local landfill or<br />
                            recycling center in the Jefferson County, Alabama area that <br />
                            will be able to accept and dispose of that specific material.</p>
                    </section>
                </div>
            </div>


            <form id="submission-id" className='submission-form d-flex justify-content-center align-items-center flex-column' onSubmit={handleSubmit}>


                <div id="container-id"
                    className="container-fluid">
                    <div className="row p-0">
                        <div className="col p-0">
                            <div id="page-card" className="card justify-content-center">
                                <div className='card-body'>
                                    <h3 id="card-title" className="card-title text-center">Demolition/Construction Waste</h3>
                                    <p className="card-text text-center ">Brick, Concrete, Asphalt, Rubble, Tile, Ferrous Metal, Masonry, Non-Ferrous Metal, Paper, Cardboard, Plastic, Timber, Glass, Rubber, Leather, Paints, Varnishes, Adhesives, Lacquers</p>
                                    <input className="check-box" id="check1" type="checkbox" name="checkbox" />
                                </div>
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id="page-card" className="card justify-content-center" >
                                <div className='card-body'>
                                    <h3 id="card-title" className="card-title text-center">Hazardous Waste</h3>
                                    <p className="card-text text-center ">Asbestos, Chemicals (Brake fluid or printer toner), Batteries (household and car batteries) Solvents, Pesticides, Car Oil, Fluorescent Tubes, Electrical items (tvs and fridge/freezer)</p>
                                    <input className="check-box" id="check2" type="checkbox" name="checkbox" />
                                </div>
                            </div>
                        </div>

                        <div className="col p-0">
                            <div id="page-card" className="card justify-content-center">
                                <div className='card-body'>
                                    <h3 id="card-title" className="card-title text-center">Household Waste</h3>
                                    <p className="card-text text-center ">Garbage, trash, and sanitary wastes in septic tanks and medical waste, that is derived from households, farms, or ranches. Household waste does not include trauma scene waste.</p>
                                    <input className="check-box" id="check3" type="checkbox" name="checkbox" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row button-style p-0">
                        <div className='group-btn' id='group-id'>
                            <input type='submit' value='Submit' className='btn submitbtn' />
                            <button className='btn cancelbtn' onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SubmissionForm;