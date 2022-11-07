// //slideshow
import React, { useState } from "react";
import './glimpses.css';
let slides = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg']

export default function Glimpses()
{
    let [slideIndex, setSlideIndex] = useState(0);
    
    function next(){
        setSlideIndex((prevslideIndex) => { if(prevslideIndex >= 4){return 0;} return prevslideIndex+ 1;});
    }
    // 
    function prev(){
        setSlideIndex((prevslideIndex) => { if(prevslideIndex <= 1){return 4;} return prevslideIndex-1;});
    }
    // 
    return (
        <div className="slideshow-container ">          
            <img className="imgstyle" src={`./images/${slideIndex+1}.jpg`}/>
            <div className="prev" onClick={prev}>❮</div>
            <div className="next" onClick={next}>❯</div>
        </div>
    )
}









