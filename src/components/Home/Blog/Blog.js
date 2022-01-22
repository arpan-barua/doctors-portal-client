import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import BlogCard from '../BlogCard/BlogCard';

const blogData=[
    {
        image: people1,
        name: 'Dr. Caudi',
        title: '2 times of brush in a day can keep you healthy'
    },
    {
        image: people2,
        name: 'Dr. Paula',
        title: 'The tooth cancer is taking a challenge'
    },
    {
        image: people3,
        name: 'Dr. Tammy',
        title: 'Scaling removes tartar and keeps teeth and gums healthy'
    }

]

const Blog = () => {
    return (
        <section>
            <div className='text-center mt-5 pt-5'>
                <h5 style={{color:'#1CC7C1'}}>OUR BLOG</h5>
                <h1 style={{color:'#3A4256'}}>From Our Blog News</h1>
            </div>
            <div className='d-flex justify-content-center'>
           <div className='row w-75'>
           {
               blogData.map(blog => <BlogCard blog={blog}></BlogCard>)
           }
           </div>
        </div>
        </section>
    );
};

export default Blog;