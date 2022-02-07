import React from 'react';
import doctor from '../../../images/doctor.png';

const Appointment = () => {
    return (
        <div className='row d-flex mt-4 pt-4'>
            <div className='col-md-4'>
                <img style={{height:'400px'}} src={doctor} alt="" />
            </div>
            <div className='col-md-8 mt-4 pt-4'>
                <h5 style={{color:'#1CC7C1'}}>APPOINTMENT</h5> <br />
                <h1>Make an appointment <br /> Today</h1> <br />
                <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam dolore numquam veniam fuga porro, facere placeat nisi voluptas quam dicta, velit vitae atque quaerat!</small> <br />
                <button className='btn btn-brand mt-5'>Learn More</button>
            </div>
        </div>
    );
};

export default Appointment;