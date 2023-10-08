import React, { useRef, useState } from "react";
import BlogList from "./BlogList";
import { blogList } from "./Data"; 

let Blogs = ()=>{
    let [blogss,setBlogss]=useState(blogList)


    return(

<div className="home-header blogs h-screen w-screen cursor-auto">
    <h2 >Inc. This Morning</h2>
    <h1>
      <span>“</span>Blog<span>”</span>
    </h1>
    <p >
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
    <BlogList blogs={blogss} />
</div>


    )
}

export default Blogs