import React from 'react';
import ServiceDetail from '../ServiceDetails/ServiceDetail';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'

const serviceData = [
    {
        name:'Fluoride Treatment',
        img:fluoride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teath Whitening',
        img:whitening
    }

]

const Services = () => {
    return (
        <section className="services-container mt-5 pt-5" id="services">
            <div className='text-center'>
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h1 style={{color:'#3A4256'}}>Services We Provide</h1>
            </div>
        <div className='d-flex justify-content-center mt-5 pt-4'>
           <div className='row w-75'>
           {
               serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
           }
           </div>
        </div>
        </section>
    );
};

export default Services;