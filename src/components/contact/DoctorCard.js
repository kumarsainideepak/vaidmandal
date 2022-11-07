//It is a card made for each doctor to represent their speciality and other such things.
//Like -- Image, Name, Speciality, ContactInfo, some blogs links, qualifications.

/* 
    data passed as props might be: 
    {
        image: ,
        alternate: ,
        name: ,
        speciality: ,
        contactInfo: {phone: , email: },
        blogLinks: [ {link: , title: }]
    }
*/

/*
divStyle = {
    max-width: fit-content;
    max-height: max-content;
    background-color: rgb(0,222,222,0.5);
    align-items: center;
    text-align: center;
    padding: 15px;
    border-radius: 5px;
    color: darkslategrey;
    box-shadow: 10px 10px rgb(111 111 111 / 20%);
}
*/

import React from "react";

export default function DoctorCard(props)
{
    let divStyle = {
        maxWidth: "fit-content",  //Revise this property
        maxHeight: "max-content", //Revise this property
        backgroundColor: "rgb(0,222,222,0.5)",
        alignItems: "center",
        textAlign: "center",
        padding: "15px",
        borderRadius: "5px",
        color: "darkslategrey",
        boxShadow: "10px 10px rgb(111,111,111,.2)",
    }
    let imgStyle = {
        border: "double",
        borderRadius: "5px",
        boxShadow: "5px 5px rgb(111,111,111,.2)",
    }
    let textStyle = {
        textShadow: "3px 3px rgb(111,111,111,.2)",
        // textDecoration: "underline",
        textDecoration: "none",
        color: "darkslategrey",
    }
       return (
        <div style={divStyle}>
            <img style = {imgStyle} src={props.img} />
            <h3 style = {textStyle}>{props.name}</h3>
            <p style = {textStyle}>{props.specialty}</p>
            <p style={textStyle}>Phone: {props.phone}</p>
            <p style = {textStyle}>Email: {props.email}</p>
            <div>
                Blog Links: 
                <a style={textStyle} href = "">Corona Precautions</a>
            </div>
        </div>
    )
}



/*
General template of DoctorCard
     // let blogLinks
    // blogLinks = props.blogLinks.map((element) => (<a href="">{element}</a>))    // element --> { link: , title: }

        // <div>
        //     <img src= {props.image} alt = {props.alternate}/>
        //     <h3>{props.name}</h3>
        //     <p>{props.speciality}</p>
        //     <p>{props.contactInfo}</p>
        //     {blogLinks.length && <div>{blogLinks}</div>}
        // </div>
*/