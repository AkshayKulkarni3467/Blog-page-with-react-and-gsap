import React from "react";
import { Link } from "react-router-dom";
import { blogList } from "./Data";
import designer from '../assets/images/designer-1.jpeg'
import author from '../assets/images/author.jpg'
const BlogItem = ({blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
  }})=>{
    return(
        <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={designer} alt='cover' />
      <h3 className="shortdesc">{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img src={author} alt='avatar' />
          <div>
            <h6 className="author">{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
    )
}

export default BlogItem