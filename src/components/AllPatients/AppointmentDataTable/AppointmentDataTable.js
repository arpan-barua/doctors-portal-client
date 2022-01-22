import React from 'react';

const AppointmentDataTable = ({appointments}) => {
    return (
        <table class="table table-striped">
  <thead>
    <tr>
      <th className='text-secondary' scope="col">#</th>
      <th className='text-secondary' scope="col">Name</th>
      <th className='text-secondary' scope="col">Phone</th>
      <th className='text-secondary' scope="col">Email</th>
      <th className='text-secondary' scope="col">dateOfBirth</th>
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
      <td>{appointment.dateOfBirth}</td>
    </tr>
     )}
  </tbody>
</table>
    );
};

export default AppointmentDataTable;