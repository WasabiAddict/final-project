import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const MeetTheDevs = () => {
    return (
        <main>
            <div className='devsTitle'>
                <h1>Meet Our Developers</h1>
            </div>
            <div className='row justify-content-center'>
                <div className=" col-md-3 mb-2">
                    <div className="card shadow-rounded ">
                        <div style={{height:400, objectFit: "cover"}} className="card top">
                            <img src="../assets/David2.jpg" alt=""  height='100%'  />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">David Tran </h4>
                            <p className="card-title text-center"> Backend/Navbar/Frontend Routing</p>
                            <a target="_blank" href="https://www.linkedin.com/in/david-tran-b266b8164/ " className='btn btn-outline-primary'>LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className=" col-md-3">
                    <div className="card shadow-rounded ">
                        <div  style={{height:400, objectFit: "cover"}} className="card top">
                            <img id="dalton" src="../assets/Dalton.png" alt=""  height='100%'  />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">Dalton Hall </h4>
                            <p className="card-title text-center"> Frontend/Homepage</p>
                            <a target="_blank" href="https://www.linkedin.com/in/dalton-hall-ab43a522b" className='btn btn-outline-primary'>LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className=" col-md-3">
                    <div className="card shadow-rounded ">
                        <div  style={{height:400, objectFit: "cover"}} className="card top">
                            <img src="../assets/kurt.jpg" alt=""  height='100%'  />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title">Kurtis Butler </h4>
                            <p className="card-title"> Frontend/Submissions Page </p>
                            <a target="_blank" href="https://www.linkedin.com/in/kurtis-butler-web-developer/" className='btn btn-outline-primary'>LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className=" col-md-3">
                    <div className="card shadow-rounded ">
                        <div  style={{height:400, objectFit: "cover"}} className="card top">
                            <img src="../assets/Jacob.png" alt=""  height='100%' />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">Jacob Watters </h4>
                            <p className="card-title"> Frontend/Map </p>
                            <a target="_blank" href="https://www.linkedin.com/in/jacob-watters-3167b079/" className='btn btn-outline-primary'>LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className=" col-md-3">
                    <div className="card shadow-rounded ">
                        <div  style={{height:400, objectFit: "cover"}} className="card top">
                            <img src="../assets/Abigail.jpg" alt="" height='100%' />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">Abigale Callins </h4>
                            <p className="card-title"> Frontend Logo/ Backend/Database </p>
                            <a target="_blank" href="https://www.linkedin.com/in/abigale-callins-407188ab/" className='btn btn-outline-primary'>LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className=" col-md-3">
                    <div className="card shadow-rounded ">
                        <div  style={{height:400, objectFit: "cover"}} className="card top">
                            <img src="../assets/Santita.jpeg" alt="" height='100%' />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">Santita Humphries </h4>
                            <p className="card-title"> Database/Backend </p>
                            <a target="_blank" href="https://www.linkedin.com/in/santita-humphries-698a29233" className='btn btn-outline-primary'>LinkedIn</a>
                        </div>
                    </div>
                </div>
                    
            </div>


        </main>

    )
}


export default MeetTheDevs;