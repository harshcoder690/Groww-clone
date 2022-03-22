import React from 'react'
import image from '../../images/logo-dark-groww.svg'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="brandImage">
                <a href="https://groww.in"><img src={image} alt="groww"></img></a>
            </div>
            <div className="searchBox">
                    <span className="material-icons"><i class="fa fa-search"></i></span>
                    <input type="text" className="searchInput" placeholder="What are you looking for today?"></input>        
            </div>
            <div className="loginOrRegister">
                <button>Login/Register</button>
            </div>
        </div>
    )
}

export default Navbar
