import React from "react"
import { Link } from "react-router-dom"


const Navbar = () => {
    // const burger = document.querySelector('.burger');
    // const nav = document.querySelector('.nav-links');
    // const navLinks = document.querySelectorAll('.nav-links li');

    // burger.addEventListener('click', () => {
    //     //toggle Nav
    //     nav.classList.toggle('nav-active');

    //     //animate links
    //     navLinks.forEach((link, index) => {
    //         if (link.style.animation) {
    //             link.style.animation = ''
    //         } else {
    //             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    //         }
    //     });
    //     //burger animation
    //     burger.classList.toggle('toggle');
    // });

    return (
        <nav>

            <div className="logo">
                <img src="../assets/NewTitle.png" style={{ height: "100px", width: "500px" }}></img>
            </div>
            <ul className="nav-links">
                <Link to="/">
                    <li>
                        <a className="navHover" href="#">Home</a>
                    </li>
                </Link>
                <Link to="/mappage">
                    <li>
                        <a className="navHover" href="#">Map</a>
                    </li>
                </Link>
                <Link to="/SubmissionForm">
                    <li>
                        <a className="navHover" href="#">Submission Form</a>
                    </li>
                </Link>
                <Link to="/MeetTheDevs">
                    <li><a className="navHover" href="#">Meet The Devs</a></li>
                </Link>
                <Link to="/Reviews">
                    <li>
                        <a className="navHover" href="#">Reviews</a>
                    </li>
                </Link>
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;