import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const testimonialData = [
    {
        image: people1,
        name: 'Winson Herry',
        location: 'California'
    },
    {
        image: people2,
        name: 'Winson Herry',
        location: 'California'
    },
    {
        image: people3,
        name: 'Winson Herry',
        location: 'California'
    }
]

const Testimonial = () => {
    return (
        <section className='testimonial-container mt-5 pt-5' id='reviews'>
            <div className='ms-5 ps-5'>
                <h5 style={{color:'#1CC7C1'}}>TESTIMONIAL</h5>
                <h1 style={{color:'#3A4256'}}>What's Our Patients <br /> Says</h1>
            </div>
        <div className='d-flex justify-content-center'>
           <div className='row w-75'>
           {
               testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
           }
           </div>
        </div>
        </section>
    );
};

export default Testimonial;