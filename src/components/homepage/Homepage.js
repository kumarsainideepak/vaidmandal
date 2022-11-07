import React from "react";
import Chairman from'./Chairman';
import Why from './Why';
import Image from "./Image";
import Footer from "../Footer";
// import {Outlet} from 'react-router-dom';

import './hompage.css';
import Glimpses from "../about/Glimpses";

export default function Homepage()
{
    return(
        <div class = "home-div">
            <Image/>
            <Chairman />
            <Glimpses/>
            <Why/>
            <Footer/>
        </div>
    )
}