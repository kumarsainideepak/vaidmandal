import React from "react";
import {NavLink, Link, Outlet} from 'react-router-dom';
import './navbar.css';

export default function NavBar()
{
    return (
        <div>
            <nav className="navbar">
                <Link to = "/" className="astyle"><div className="divstyle"><img className = "nav--logo" src="" alt="Logo"/><h2>Dhanwantari Vaid Mandal</h2></div></Link>
                <div className="divstyle">
                    <NavLink to="/" className="astyle">Home</NavLink>
                    <NavLink to="/blogs" className="astyle">Ayurveda</NavLink>
                    <NavLink to="/contact" className="astyle">Contacts</NavLink>
                    <NavLink to="/about" className="astyle">About</NavLink>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}