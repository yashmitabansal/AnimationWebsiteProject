import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import './Service.css';
import './Card.css';
import { SData } from './ServiceData';
const Service = () => {
  return (
    <div>
      <div className='my-5'>
        <h1 className='text-center'>
          Our Services
        </h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div>

              <div className='row gy-3 card-container'>


                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>


            </div>
          </div>
        </div>
      </div>







    </div>
  )
}

export default Service;