import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Web from "../Images/c1.jpg";

import './Card.css';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
  return (
    <div>
      <div className='mx-auto'>

        <div className="card">
          <img src={Web} className="card-img-top" alt="Animation Image" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/Contact" className="btn ServiceBtn">Go somewhere</NavLink>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card;