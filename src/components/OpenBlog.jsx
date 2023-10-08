import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from './Data';
import { Link } from 'react-router-dom';
import one from '../assets/images/designer-1.jpeg'

const OpenBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1 className='blogname'>{blog.title}</h1>
            <div className='blog-subCategory'>
            </div>
          </header>
          <img className='blogimage' src={one} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ):(<div></div>)}
    </>
  );
};

export default OpenBlog;
