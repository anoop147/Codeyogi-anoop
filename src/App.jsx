
import React from 'react';
import Sidebar from './Sidebar';
import About from './About';
import Experiance from './Experiance';
import Education from './Education';
import ContactUs from './ContactUs';
import Home from './Home';
import Error from './Error';
import {Routes, Route} from  "react-router-dom";
function App() {
  return (
    <div className='flex bg-grey-400'>
    <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Experiance" element={<Experiance />}></Route>  
        <Route path="/Education" element={<Education />}></Route>  
        <Route path="/ContactUs" element={<ContactUs />}></Route>  
        <Route component={<Error />}></Route>
                     
    </Routes>
   
    </div>
    
  );
}

export default App;
