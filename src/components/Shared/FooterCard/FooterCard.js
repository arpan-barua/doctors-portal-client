import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FooterCard = ({footer}) => {
    return (
        <div className='footer-container col-md-3 text-secondary'>
            <div>
                <h6 style={{color:'#1CC7C1'}}>{footer.title}</h6><br />
                <small>{footer.emergency}</small><br />
                <small>{footer.checkUp}</small><br />
                <small>{footer.treatment}</small><br />
                <small>{footer.toothExtraction}</small>
                <small>{footer.address}</small><br />
                <FontAwesomeIcon icon={footer.icon1}></FontAwesomeIcon>
                <FontAwesomeIcon icon={footer.icon2}></FontAwesomeIcon>
                <FontAwesomeIcon icon={footer.icon3}></FontAwesomeIcon>
            </div>
            
        </div>
    );
};

export default FooterCard;