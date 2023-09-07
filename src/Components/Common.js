import React from 'react'
import './Home.css';
import Web from "../Images/Programming-amico.svg"
import { NavLink } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
const Common = (props) => {
    return (
        <div>

            <section id='Header' >
                <div className=' container-fluid'>
                    <div>
                        <div className='col-10 mx-auto homeContent  '>
                            <div className='col-md-6 pt-5  TextHeader '>
                                <h1 className='Heading_1'>
                                    {props.name}<strong className='Brand-Name'> YashmitaBansal</strong>
                                </h1>
                                <h2 className='my-3 Heading_2'>
                                    We are the team of talented developer making Website
                                </h2>
                                <div className="mt-3 ">
                                    <NavLink to={props.visit} className='btn homeBtn'> {props.btnName}</NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6  header-img  '>

                                <img src={props.imgsrc} className="imgAnimation " id="" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Common;