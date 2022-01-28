import React from 'react';
import Chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}}className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1> <br />
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed veritatis optio? Quibusdam ipsum repellendus omnis, assumenda architecto iure unde nihil iusto.</p> <br />
                <button className='btn btn-brand'>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 ms-5">
                <img style={{height:'360px'}} src={Chair} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;