import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {  
        fetch('http://localhost:5000/isDoctor',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsDoctor(data))
    }, []);

    return (
        <section>
            <div className="sidebar">
            <Link to="/dashboard/appointment">Dashboard</Link>
            {
                isDoctor && <div> 
                    <Link to="/appointmentScheduling">Appointment</Link>
                    <Link to="/dashboard/allPatients">Patients</Link>
                </div>
            }
            </div>
        </section>

      
    );
};

export default Sidebar;