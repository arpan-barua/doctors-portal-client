import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className='appointment-container d-flex mt-5 pt-5'>
            <div className='col-md-5 doctor-image'>
                <img src={doctor} alt="" />
            </div>
            <div className='appointment-info pe-5'>
                <h5 style={{color:'#1CC7C1'}}>APPOINTMENT</h5> <br />
                <h1>Make an appointment <br /> Today</h1> <br />
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam dolore numquam veniam fuga porro, facere placeat nisi voluptas quam dicta, velit vitae atque quaerat!</small> <br />
                <button className='btn btn-brand mt-5'>Learn More</button>
            </div>
        </div>
    );
};

export default Appointment;