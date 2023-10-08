import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import BlogItem from "./BlogItem";
import { blogList } from "./Data";
import { Navigate, useNavigate } from "react-router-dom";
let Newblog = ()=>{
    let [title,setTitle]=useState('')
    let [content,setContent] = useState('')
    let [date, setDate] = useState('')
    let [author,setAuthor]=useState('')
    let [id,setId]=useState(5)
    let navi = useNavigate()
    function createNewPost(ev){
        
        ev.preventDefault()
        setId(id++)
        blogList.push({
            id:id,
            title:title,
            description:content,
            authorAvatar:'../assets/images/author.jpg',
            authorName:author,
            createdAt:date,
            cover:'../assets/images/one.jpeg',
        })
        
        console.log(blogList)
        navi('/blogs')
    }
    return(
       <form className="form flex" action="" onSubmit={createNewPost}>
        <input className="formitem" type="author" placeholder="author name" value={author} onChange={ev => setAuthor(ev.target.value)}/>
        <input className="formitem" type="text" placeholder="date" value={date} onChange={ev => setDate(ev.target.value)}/>
        <input className="formitem" type="title" placeholder="title" value={title} onChange={ev => setTitle(ev.target.value)} />
        <ReactQuill className="reactquill" value={content} onChange={ev=>setContent(ev)} placeholder="description"/>
        <button className="createpost formitem">SUBMIT</button>
       </form>
    )
}

export default Newblog