import React from 'react';
import { Link } from 'react-router-dom';
import Chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center mt-5">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1> <br />
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed veritatis optio? Quibusdam ipsum repellendus omnis, assumenda architecto iure unde nihil iusto.</p><br />
                <Link to="/appointmentScheduling"><button type="button" className='btn btn-brand'>GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6 img-fluid">
                <img style={{maxWidth: '100%', height:'auto'}} src={Chair} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;