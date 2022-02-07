import React from 'react';
import { faFacebook,faGooglePlus,faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import FooterCard from '../FooterCard/FooterCard';

const footerData = [
    {
        title:'About',
        emergency:'Emergency Dental Care',
        checkUp: 'Check Up',
        treatment:'Treatment of personal diseases',
        toothExtraction:'Tooth Extraction'
    },
    {
        title:'Services',
        emergency:'Emergency Dental Care',
        checkUp: 'Check Up',
        treatment:'Treatment of personal diseases',
        toothExtraction:'Tooth Extraction'
    },
    {
        title:'Oral Health',
        emergency:'Emergency Dental Care',
        checkUp: 'Check Up',
        treatment:'Treatment of personal diseases',
        toothExtraction:'Tooth Extraction'
    },
    {
        title:'Our Address',
        address:'New York-10101',
        icon1:faFacebook,
        icon2:faGooglePlus,
        icon3:faTwitter
    }

]

const Footer = () => {
    return (
        <section>
           <div className='d-flex justify-content-center row'>
           {
               footerData.map(footer => <FooterCard footer={footer}></FooterCard>)
           }
           </div>
           <div className='mt-5 mb-5 text-center text-secondary'>
                <small>Copyright {new Date().getFullYear()} All Rights Reserved</small>
           </div>
       </section>
    );
};

export default Footer;