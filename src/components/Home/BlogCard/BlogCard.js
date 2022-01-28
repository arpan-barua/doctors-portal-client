import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className='col-md-4 border-end ps-2 pe-2'>
            <div className='d-flex'>
                <div>
                    <img style={{height:'50px'}} src={blog.image} alt="" />
                </div>
                <div className='ps-3'>
                    <h6>{blog.name}</h6>
                    <small className='text-secondary'>{blog.date}</small>
                </div>
            </div>
            <h5 className='pt-3' style={{color:'#3A4256'}}>{blog.title}</h5> <br />
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore quisquam neque iusto doloribus similique mollitia!</p>
        </div>
    );
};

export default BlogCard;