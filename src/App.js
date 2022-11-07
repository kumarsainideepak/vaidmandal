import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Contact from './components/contact/Contact.js';
import About from './components/about/About';
import Blogs from './components/blogs/Blogs';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <NavBar/>}>
                <Route index element={<div><Homepage/></div>}/>
                <Route path="blogs" element={<div><Blogs/></div>}/>
                <Route path="contact" element={<div><Contact/></div>}/>
                <Route path="about" element={<div><About/></div>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

//Home page
// <NavBar/>
//       <Chairman 
//         img = ""
//         message = "Hello, this side chairman of Dhanwantri vaid mandal."
//       />
//       <Why reason = "We should do something to do so" />


//Contact
  // let list = ["treatment 1", "treatment 2", "treatment 3"]

/* <TreatmentArea
        list = {list}
      /> */


//About
