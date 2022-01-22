import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData = [
        {
            title:'Opening Hours',
            description:'We are open 7 days',
            icon:faClock,
            background:'primary'
        },
        {
            title:'Visit our location',
            description:'Brooklyn,NY 30200,United States',
            icon:faMapMarker,
            background:'dark'
        },
        {
            title:'Contact Us',
            description:'+15299783525',
            icon:faPhone,
            background:'primary'
        }
    
    ]
    return (
       <section className='d-flex justify-content-center'>
           <div className='row w-75'>
           {
               infosData.map(info => <InfoCard info={info}></InfoCard>)
           }
           </div>
       </section>
    );
};

export default BusinessInfo;