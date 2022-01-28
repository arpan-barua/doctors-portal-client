import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
const appointments = [
    {
        id: 1,
        subject: 'Teeth Orthodonics',
        visitingHour: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '10.00 AM - 11.00 AM',
        space: 9
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '11.00 AM - 12.00 PM',
        space: 5
    },
    {
        id: 5,
        subject: 'Pediatric Dental',
        visitingHour: '06.00 PM - 07.00 PM',
        space: 10
    },
    {
        id: 6,
        subject: 'Oral Surgery',
        visitingHour: '07.00 PM - 08.00 PM',
        space: 10
    }
]

const AvailableAppointment = ({date}) => {
    return (
        <section>
            <h2 style={{color:'#1CC7C1'}} className='text-center mt-5 pt-2'>Available Appointments On {date.toDateString()}</h2>
            <div className='row'>
                {
                    appointments.map(appointment => <AppointmentCard date={date} key={appointment.id} appointment={appointment}></AppointmentCard>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;