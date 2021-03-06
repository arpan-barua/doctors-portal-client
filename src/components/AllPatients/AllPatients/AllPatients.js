import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {

    const [appointments, setAppointments] = useState([]);
   
    useEffect(() => {
        fetch('https://stark-sierra-96578.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, []);

    return (
        <div className='container-fluid row mt-4'>
            <div className='col-md-2'><Sidebar></Sidebar></div>
            <div className='col-md-10'>
                <h5 style={{color:'#1CC7C1'}}>All Patients</h5>
                <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
            </div>
            
        </div>
    );
};

export default AllPatients;