import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentListByDate from '../AppointmentListByDate/AppointmentListByDate';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange= date =>{
        setSelectedDate(date);
    }

    useEffect(() => {  
        fetch('http://localhost:5000/appointmentsByDate',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({date:selectedDate, email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setAppointments(data))
    }, [selectedDate]);


    return (
        <section>
            <div className='container-fluid row mt-3'>
            <div className='col-md-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-4 mt-3'>
            <Calendar
           onChange={handleDateChange}
           value={new Date()}
            />
            </div>
            <div className='col-md-5 mt-3'>
                <AppointmentListByDate appointments={appointments}></AppointmentListByDate>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;