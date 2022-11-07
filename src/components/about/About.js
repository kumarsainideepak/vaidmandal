import React,{useState} from "react";
// import Glimpses from './Glimpses';
import History from './History';
import Motive from './Motive';
import Quotes from './Quotes';
import Footer from "../Footer";
import Glimpses from "./Glimpses";

export default function About()
{
    // let [iheight,setHeight] = useState(window.innerHeight);
    // let [width, setWidth] = useState(window.innerWidth);
    // React.useEffect(()=>{
    //     function widthListener(){
    //              setWidth(window.innerWidth)
    //      }
    //      function heightListener()
    //      {
    //          setHeight(window.innerHeight)
    //      }
    //      window.addEventListener("resize", widthListener)
    //      window.addEventListener("resize",heightListener)
    //      return (
    //          function(){
    //            ()=>window.removeEventListener("resize", widthListener);
    //            ()=>window.removeEventListener("resize", widthListener);
    //         }
    //     )
         
    //  },
    //     []
    //  )
    // let divstyle={
    //     height: {iheight},
    //     width: {width},
    // }
    return(
        <div>
            {/* <Glimpses/> */}
            <Quotes/>
            <History/>

            <Motive/>
            
            <Footer/>
        </div>
    )
}