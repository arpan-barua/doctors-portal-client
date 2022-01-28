import React from 'react';


const ServiceDetail = ({service}) => {
    return (
        <section className='d-flex col-md-4'>
            <div className='text-center'>
                <img style={{height:"50px"}} src={service.img} alt="" />
                <h5 style={{color:'#3A4256'}} className='mt-4'>{service.name}</h5> <br />
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, error.</p>
            </div>
        </section>
    );
};

export default ServiceDetail;