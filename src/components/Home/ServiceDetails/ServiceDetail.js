import React from 'react';


const ServiceDetail = ({service}) => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='col-md-4 text-center'>
                <img style={{height:"50px"}}src={service.img} alt="" />
                <h5>{service.name}</h5>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, error.</p>
            </div>
        </section>
    );
};

export default ServiceDetail;