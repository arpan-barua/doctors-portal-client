import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentListByDate = ({appointments,selectedDate}) => {
    
    return (
        <div>
            <div className='text-center mb-4'>
            <h2 style={{color:"#1CC7C1"}}>Appointments</h2>
            <small className='text-secondary'>ON {selectedDate.toDateString()}</small>
            </div>
            {
                appointments.length ?
               <AppointmentShortList appointments={appointments}></AppointmentShortList>
               :
               <div>
                   <h4 className='text-center text-secondary'>No available appointment on this date</h4>
               </div>
            }
        </div>
    );
};

export default AppointmentListByDate;