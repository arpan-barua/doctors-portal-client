import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <section>
            <div className="sidebar">
            <Link to="/home">Home</Link>
            <Link to="/dashboard/appointment">Dashboard</Link>
            <Link to="/appointmentScheduling">Appointment</Link>
            <Link to="/dashboard/allPatients">Patients</Link>
            </div>
        </section>

      
    );
};

export default Sidebar;