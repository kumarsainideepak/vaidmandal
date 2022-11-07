/*
1. support contacts -- page issue, site issue, help
2. About -- about page
3. Academics/ Careers
4. Community -- Contacts/doctordetails
*/

import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer()
{

    let footerStyle = {
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between",
        color: "white",
    }
    let aStyle = {
        color: "white",
        textDecoration: "none",
    }

    return (
        <footer style = {footerStyle}> 
            <NavLink to="mailto:kumarsainideepak32@gmail.com" style = {aStyle} href = "">Site issues</NavLink>
          
            <NavLink to="about" style = {aStyle} href = "">About</NavLink>
            <NavLink to="contact" style = {aStyle} href = "">Contact</NavLink>
        </footer>
    )
}