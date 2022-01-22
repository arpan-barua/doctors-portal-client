import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, []);

    return (
        <div className='container-fluid row'>
            <div className='col-md-10'>
                <h5>All Patients</h5>
                <AppointmentDataTable appointments={appointments}></AppointmentDataTable>
            </div>
            
        </div>
    );
};

export default AllPatients;