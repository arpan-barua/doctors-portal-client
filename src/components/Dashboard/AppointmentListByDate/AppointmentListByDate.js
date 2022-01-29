import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentListByDate = ({appointments}) => {
    
    return (
        <div>
            <h2 style={{color:"#1CC7C1"}} className='text-center mb-4'>Appointments</h2>
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