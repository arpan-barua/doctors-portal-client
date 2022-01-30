import React from 'react';

const AppointmentDataTable = ({appointments}) => {
  
    return (
        <table class="table table-striped">
  <thead>
    <tr className='text-secondary'>
      <th className='text-secondary' scope="col">#</th>
      <th className='text-secondary' scope="col">Date</th>
      <th className='text-secondary' scope="col">Time</th>
      <th className='text-secondary' scope="col">Service</th>
      <th className='text-secondary' scope="col">Name</th>
      <th className='text-secondary' scope="col">Phone</th>
      <th className='text-secondary' scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {
         appointments.map((appointment, index)=>
      
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{appointment.date}</td>
      <td>{appointment.time}</td>
      <td>{appointment.service}</td>
      <td>{appointment.yourName}</td>
      <td>{appointment.phoneNumber}</td>
      <td>{appointment.email}</td>
      
    </tr>
     )}
  </tbody>
</table>
    );
};

export default AppointmentDataTable;