import React from "react";

export default function TreatmentArea(props)
{
//     let ulStyle = {
//         backgroundColor: "rgb(0,222,222,0.1)",
//     }
// let areas = props.list.map((element) => <li>{element}</li>) //list of fields in which treatment has been done.
    return (
        <div>
            <h3>List of Treatment Areas: </h3>
            <ul>                               
                <li>Free medical camps</li>
                <li>Free ayurvedic dispensaries</li>
            </ul>
        </div>
    )
}