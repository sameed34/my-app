import React, {useState} from 'react'


export default function Form(props) {
    const [text,setText]= useState("Sameed");

    const up=()=>{
        const upd= text.toUpperCase();
        setText(upd);
    }
    const low =()=>{
        const lod= text.toLowerCase();
        setText(lod);
    }
    const cha=(event)=>{
        setText(event.target.value)  
    }
    
     
  return (
    <>
<div className="mb-3 my-2" >
    {console.log(props.mode)}
    <h1 style={{color: props.mode==="light"?"black":"white"}}>{props.heading}</h1>
  <textarea className="form-control my-2" style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="light"?"black":"white"}} value={text} onChange={cha} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button className="btn btn-primary mx-2" onClick={up}>Convert to Uppercase updated </button>
  <button className="btn btn-primary" onClick={low}>Convert to Lowercase updated</button>

</div>
<div className="container my-15" style={{color: props.mode==="light"?"black":"white"}} >
    <h1>Summary</h1>
    <p><b>Total Words: </b>{text.split(" ").filter((e1)=>{return e1.length!=0}).length}<b> Total Cdsfsdfsdfdfharacters: </b>{text.length} </p>
    <h2>Preview: </h2>
    <p>{text}</p>
</div>
</>
  )
}