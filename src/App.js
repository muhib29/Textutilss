//import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
// import About from './component/About';
import Textforms from './component/Textforms';
import React, {useState} from 'react';
// import {
//    BrowserRouter as Router,
//    Switch,
//    Route,
//  } from "react-router-dom";

function App() {
   const[mode, setMode] = useState('light');

const [alert, setAlert] = useState(null);

const showAlert =(message, type)=> {
     setAlert({
      msg:  message,
      type: type
     })
   setTimeout(() => {
      setAlert(null);
   }, 1500);
}

// const togglepurplemode =()=> {
   
//    if (mode==="success"){
//       setMode("primary")
//       document.body.style.backgroundColor = '#ffa400'
//       showAlert("Blue mode has been Enabled", "success")

//    }
//    else{
//       setMode("success")
//       document.body.style.backgroundColor = '#e0ff05'
//       showAlert("Green mode has been Enabled", "success")

//    }
// }




// const togglegreenmode =()=> {
//    if (mode==="danger"){
//       setMode("info")
//       document.body.style.backgroundColor = '#ff7500'
//       showAlert("Cyan mode has been Enabled", "success")

//    }
//    else{
//       setMode("danger")
//       document.body.style.backgroundColor = '#ffffff'
//       showAlert("Red mode has been Enabled", "success")
     
//    }
// }

// const removeBodyClasses = () =>{
//    document.body.classList.remove('bg-light')
//    document.body.classList.remove('bg-dark')
//    document.body.classList.remove('bg-warning')
//    document.body.classList.remove('bg-danger')
//    document.body.classList.remove('bg-success')

// }
const togglemode =(cls) => {
      if(mode==="light"){
         setMode("dark")
         document.body.style.backgroundColor = '#000051'
         showAlert("Dark mode has been Enabled", "success")
         // document.title = 'Textutils - Dark Mode';
         // setInterval(() => {
         //    document.title = 'Textutls is Amazing'
         // }, 2000);
         // setInterval(() => {
         //    document.title = 'Install Textutils Now'
         // }, 1500);
 
      }
      else{
         setMode ('light')
         document.body.style.backgroundColor = 'white'
         showAlert("Light mode has been Enabled", "success")
         // document.title = 'Textutils - Light Mode';

      }
   }

    return (
    <>
 <Navbar   title="Textutils" about="about"  mode={mode} togglemode={togglemode}  /> 
 <Alert alert ={alert}/>

 <Textforms  showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"  
   mode={mode} togglemode={togglemode}  />
 {/* <Router>
<Navbar   title="Textutils" about="about"  mode={mode} togglemode={togglemode}   
  />
<Alert alert ={alert}/>
<div className="container my-3" >
<Switch>
   <Route exact path="/about">
   <About   mode={mode}/>
   </Route>
   <Route exact path="/">
   <Textforms  showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"  
   mode={mode} togglemode={togglemode}  />
   </Route>
</Switch>   

   </div>
   </Router> */}
   </>
  );
}

export default App;
