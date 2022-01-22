import React from 'react';
import treatment from '../../../images/treatment.png';

const Features = () => {
    return (
        <div className='features-container d-flex mt-5 pt-5'>
            <div className='col-md-5'>
                <img style={{height:'500px'}}src={treatment} alt="" />
            </div>
            <div className='w-75'>
                <h1>Exceptional Dental <br/> Care, on Your Terms</h1> <br />
                <small className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quasi culpa cumque molestias excepturi modi nemo nobis doloremque officiis quaerat, laborum hic tempora libero tempore recusandae fugit rerum officia molestiae eligendi sit temporibus. Vitae dolorem delectus eaque sit quis deserunt iusto voluptatum praesentium cupiditate aspernatur, perferendis quam amet. Quam officiis voluptatibus explicabo perspiciatis nesciunt. Totam consequatur voluptatum amet asperiores! Doloribus ut assumenda, exercitationem perspiciatis quisquam quasi maiores. Animi aspernatur asperiores nam expedita corrupti doloribus aut aliquid inventore illum? Eius, repellat.</small><br /> <br />
                <button className='btn btn-primary'>Learn More</button>
            </div>
        </div>
    );
};

export default Features;