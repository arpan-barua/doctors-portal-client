import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => {

    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('http://localhost:5000/addAppointment',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert('Appointment created successfully');
      }
    })
    
  }
  

    return (
        <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div className='form-container pt-2'> 
       <h4 style={{color:'#1CC7C1'}}>{appointmentOn}</h4>
       <small className='text-secondary text-center'>ON {date.toDateString()}</small>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("yourName")} placeholder="Your Name" className='form-control mt-4' /> <br />
      <input {...register("phoneNumber")} placeholder="Phone Number" className='form-control'/> <br />
      <input {...register("email")} placeholder="Email" className='form-control'/> <br />
      <input {...register("dateOfBirth")} placeholder="mm/dd/yyyy" className='form-control'/> <br />
      <input className='submit btn btn-primary' type="submit" />
    </form>
       </div>
      </Modal>
        </div>
    );
};

export default AppointmentForm;