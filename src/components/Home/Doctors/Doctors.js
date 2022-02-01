import React, { useEffect, useState } from 'react';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('https://stark-sierra-96578.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className='doctors-container mt-5 pt-5'>
            <div className='text-center'>
                <h5 style={{color:'#1CC7C1'}}>Our Doctors</h5>
            </div>
        <div className='d-flex justify-content-center'>
           <div className='row w-75 mt-5 mb-5 pb-5'>
           {
               doctors.map(doctor => <DoctorsCard doctor={doctor}></DoctorsCard>)
           }
           </div>
        </div>
        </section>
    );
};

export default Doctors;