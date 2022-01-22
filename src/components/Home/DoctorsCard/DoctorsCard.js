import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorsCard = ({doctor}) => {
    return (
        <div className='col-md-4 text-center'>
            <div>
                <img style={{height:'250px'}} src={doctor.image} alt="" />
                <h6>{doctor.name}</h6>
            </div>

            <div className='d-flex justify-content-center'>
            <div>
                <FontAwesomeIcon icon={doctor.icon} />
            </div>
            <div>
                <small className='text-secondary'>{doctor.phone}</small>
            </div>
            </div>
        </div>
    );
};

export default DoctorsCard;