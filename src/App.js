import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form'; 
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
 

function App() {
  
  const [mode, setMode]=useState("light")
  const change=()=>{
    if(mode === "light"){
setMode("dark");
document.body.style.backgroundColor="grey";
show("Dark mode has been enabled", "danger");

    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      show("light mode has been enabled", "success");
      
    }
  }
  const [alert, setAlert]=useState(null);
  const show=(message, type)=>{
    setAlert({
      message: message,
      type: type
    })
  }
  
  return (
    <>
      <Router>
        <Navbar title="TextUtils" show={show} mode={mode} change={change} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/Form" element={<Form heading="Text Area" mode={mode} />} />
          <Route path="/sameed" element={<About />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
