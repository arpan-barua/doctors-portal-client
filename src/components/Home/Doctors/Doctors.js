import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor-small.png';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import DoctorsCard from '../DoctorsCard/DoctorsCard';

// const doctorsData = [
//     {
//         image: doctor,
//         name: 'Dr. Caudi',
//         icon: faPhoneAlt,
//         phone: '+61452200126'
//     },
//     {
//         image: doctor,
//         name: 'Dr. Caudi',
//         icon: faPhoneAlt,
//         phone: '+61452200126'
//     },
//     {
//         image: doctor,
//         name: 'Dr. Caudi',
//         icon: faPhoneAlt,
//         phone: '+61452200126'
//     }
// ]
const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className='doctors-container mt-5 pt-5'>
            <div className='text-center'>
                <h5 style={{color:'#1CC7C1'}}>Our Doctors</h5>
            </div>
        <div className='d-flex justify-content-center'>
           <div className='row w-75 mt-5'>
           {
               doctors.map(doctor => <DoctorsCard doctor={doctor}></DoctorsCard>)
           }
           </div>
        </div>
        </section>
    );
};

export default Doctors;