import React from 'react';



const Home = () => {
    return (
        <div className="wrapper" id="wrapper-id">
            <div className="container" id='hpBg'>
                <div className="justify-content-center">
                    <img id="img-id" src="../assets/NewTitle.png" style={{ height: "400px", width: "1112px" }}></img>
                    <p id="description" className="body text-center">At Waste 'R' Us, we take the hastle out of not knowing what kind of waste you have and where to dump it. There are several different kinds of waste that cannot all be dumped at the same spot, those types include solid waste, liquid waste, gaseous waste, medical waste, and electronic waste. By filling out our form you can find out what waste you have and where to dump it. </p>
                    <p id="founded" className="footer text-center font-weight-bold">This website was founded on April 4, 2022.</p>
                </div>
            </div>
        </div >
    )
};

export default Home;



