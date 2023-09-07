import React from 'react'
import './Home.css';
import Common from './Common';
import Web from "../Images/Programming-amico.svg"
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <div>

            <Common
                name='Grow Your Business With'
                imgsrc={Web}
                visit='/Service'
                btnName="Get Started"

            />

        </div>
    )
}

export default Home;