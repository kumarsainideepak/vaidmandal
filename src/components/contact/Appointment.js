import React from "react";

export default function Appointment()
{
    let divStyle ={
        margin: "2% 10% 2% 10%",
    }
    let textArea = {
        rows: "10",
        columns: "20",
        alignItem: "center",
        
        height: "300px",
        width: "100%",
    }
    let text;
    return (
        <form style={divStyle}>
            <label>You can contact us through following: </label>
            <br/>
            <label>Email:</label>
            <input id = "reason" placeholder="Enter your email" type="email"/>
            <br/>
            <br/>
            <textarea style={textArea} name={text}></textarea>
            <button formAction="mailto:deepak.1903328@ctgroup.in" formMethod="post" formEncType="">Submit</button>
        </form>
    )
}