import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className='col-md-4 text-secondary border-end mt-5 mb-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quam tempora velit sapiente autem fugiat consectetur officiis sed minima provident quaerat. In expedita et dolorum magnam quidem asperiores voluptas hic?</p>
            
           <div className='d-flex mt-5 ps-2 pe-2'>
             <div> 
                <img style={{height:'50px'}}src={testimonial.image}alt="" />
             </div>
             <div className='ps-3'>
                <h6 style={{color:'#1CC7C1'}}>{testimonial.name}</h6>
                <small>{testimonial.location}</small>
             </div>
            </div>
        </div>
    );
};

export default TestimonialCard;