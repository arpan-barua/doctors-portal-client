import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoctorsCard = ({doctor}) => {
    
    return (
        <div className='col-md-4 text-center'>
            <div>
                <img style={{height:'150px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
                {/* <img style={{height:'250px'}} src={`http://localhost:5000/${doctor.img}`} alt="" /> */}
                <h6 className='mt-2'>{doctor.name}</h6>
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