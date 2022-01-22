import React from 'react';

const BlogCard = ({blog}) => {
    return (
        <div className='col-md-4 border-end mt-5 pt-4'>
            <div className='d-flex'>
                <div>
                    <img src={blog.image} alt="" />
                </div>
                <div>
                    <h6 className='ps-3'>{blog.name}</h6>
                </div>
            </div>
            <h5 className='pt-3' style={{color:'#3A4256'}}>{blog.title}</h5> <br />
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore quisquam neque iusto doloribus similique mollitia!</p>
        </div>
    );
};

export default BlogCard;