import React from 'react';
import './header.module.css';
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <header>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/registration" >Registration</NavLink>
        <NavLink to="/workspace" >Post</NavLink>
    </header>
    )
}

export default Header;