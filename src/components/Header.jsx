import React from "react";
import { Link,NavLink, Outlet } from "react-router-dom";
let Header = ()=>{
    return(
        <>
        <nav className="nav absolute bg-yellow-200 flex justify-between z-10 h-16 items-center w-screen">
            <div className="mx-8">
                <h1 className="text-white text-xl">Bloggin'IT</h1>
            </div>
            <div className="nav-item flex justify-around ">
                <NavLink className="link mx-14" to={'/'}>HOME</NavLink>
                <NavLink className="link mx-14" to={'/blogs'}>BLOGS</NavLink>
                <NavLink className="link mx-14" to={'/newblog'}>NEW BLOG</NavLink>
            </div>
        </nav>
        </>
    )
}

export default Header