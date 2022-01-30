import React from 'react';

const AppointmentShortList = ({appointments}) => {
    console.log(appointments);
    return (
        <table class="table table-striped">
  <thead>
    <tr>
      <th className='text-secondary' scope="col">#</th>
      <th className='text-secondary' scope="col">Name</th>
      <th className='text-secondary' scope="col">Phone</th>
      <th className='text-secondary' scope="col">Email</th>
      <th className='text-secondary' scope="col">Service</th>
      <th className='text-secondary' scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
      {
         appointments.map((appointment, index)=>
      
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{appointment.yourName}</td>
      <td>{appointment.phoneNumber}</td>
      <td>{appointment.email}</td>
      <td>{appointment.service}</td>
      <td>{appointment.time}</td>
    </tr>
     )}
  </tbody>
</table>
    );
};

export default AppointmentShortList;