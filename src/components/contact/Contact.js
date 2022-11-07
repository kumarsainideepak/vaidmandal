import React from "react";
// import DoctorDetails from './DoctorDetails';
import TreatmentArea from './TreatmentArea';
import Appointment from "./Appointment";
import Footer from "../Footer";

export default function Contact()
{
    return(
        <div width={window.innerWidth}>
            <TreatmentArea/>
            <Appointment/>
            <Footer/>
        </div>
    )
}