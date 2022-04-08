import React from "react"

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
                <h4>Waste 'R' Us</h4>
            </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Map</a></li>
                <li><a href="#">Submission Form</a></li>
                <li><a href="#">Reviews</a></li>
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