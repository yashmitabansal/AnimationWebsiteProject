import React from 'react'
// import './About.css';
import Web from "../Images/Programming-amico.svg"
import { NavLink } from 'react-router-dom';
import Common from './Common';
const About = () => {
    return (
        <div>
            <Common name='Welcome To AboutPage'
                imgsrc={Web}
                visit='/Contact'
                btnName="Contact Us" />
        </div>
    )
}

export default About;