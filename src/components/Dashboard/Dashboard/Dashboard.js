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
        fetch('https://stark-sierra-96578.herokuapp.com/appointmentsByDate',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({date:selectedDate, email:loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setAppointments(data))
    }, [selectedDate]);


    return (
        <section>
            <div className='container-fluid row background-image mt-3'>
            <div className='col-md-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-3'>
            <Calendar
           onChange={handleDateChange}
           value={new Date()}
            />
            </div>
            <div className='col-md-7'>
                <AppointmentListByDate appointments={appointments} selectedDate={selectedDate}></AppointmentListByDate>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;