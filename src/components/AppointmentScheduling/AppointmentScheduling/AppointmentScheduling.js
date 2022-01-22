import React, { useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';



const AppointmentScheduling = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange= date =>{
        setSelectedDate(date);
    }

    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <AvailableAppointment date={selectedDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default AppointmentScheduling;