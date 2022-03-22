import React from 'react'
import './Blog.css'
function Blog(props) {
    return (
        <div className="blog">
            <img className="blogImage" src={props.image} alt="blog1"/>
            <div className="blogTitle">{props.title}</div>
        </div>
    )
}

export default Blog
