import React from "react";

export default function Why()
{
    let mainStyle = {
        margin: "2% 10% 2% 10%",
        backgroundColor: "black",
        color: "white",
    }
    let theadStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
    }
    let trStyle = {
        fontSize: "20px",
        justifyContent: "space-between"
    }
    let tdStyle = {
        width: "30%",
        margin: "5%",
    }
    return (
        <main style={mainStyle}>
            {/* <h1>Why should we treat under this organization?</h1> */}
            <table>
                <thead style = {theadStyle}>
                    <td>Our Vision</td>
                    <td>Our Mission</td>
                    <td>Our Values</td>
                </thead>
                <tbody>
                    <tr style={trStyle}>
                        <td style={tdStyle}>
                            <ul>
                            <li>To treat people with quality treatment at fair price.</li>
                            <li>To encourage people to increase standards of living with affordable price.</li>
                            </ul>
                        </td>
                        <td style={tdStyle}>To spread the influence of Ayurvedic treatment among the people of society.</td>
                        <td style={tdStyle}>
                            <ul>
                                <li>Quality treatment</li>
                                <li>Patient's satisfaction</li>
                                <li>Improving quality of living</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <p>There are a lot of cases where people are unable to treat using most of the doctors. But, they got treated under this organization</p> */}
        </main>
    )
}