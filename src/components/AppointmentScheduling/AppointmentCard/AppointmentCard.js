import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const AppointmentCard = ({appointment,date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div style={{width: "25rem"}} className="card col-md-4 text-center mt-4 ms-3 me-2">
        <div className="card-body">
          <h5 style={{color:'#1CC7C1'}} className="card-title">{appointment.subject}</h5>
          <h6>{appointment.visitingHour}</h6>
          <small className="card-text text-secondary">{appointment.space} SPACES AVAILABLE</small> <br /><br />
          <button onClick={openModal} className="btn btn-primary">BOOK APPOINTMENT</button>
          <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={appointment.subject} date={date} closeModal={closeModal}></AppointmentForm>
        </div>
      </div>
    );
};

export default AppointmentCard;