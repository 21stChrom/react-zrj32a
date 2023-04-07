

import React, { useState } from "react";

import "./styles.css";

export default function App() {

const  { showMinimized,

setShowMinimized } = useState(false);

const {width, setWidth} = useState(640); 
 //initial width of iframe window 
 
 const [height, setHeight] = useState(480); 
 
 // initial height of iframe window

 const handleResize = (event) =>

 
 // when resizing the iframe window

 setWidth(event.target.innerWidth);

 setHeight(event.target.innerHeight);
 return (

 <div className={"container"} onResize ={handleResize}>

 <div className={"foreground"}>

 <iframe

 src="https:\/\/ lens.google.com\/ocr"

 width={width}

 height={height}

 title="Google Lens active

 text transcriber" ></iframe>

 </div>

 <div className="player"></

 div>

 <div className={minimized ,{showMinimized? ,"show":""}>
 </div>
 
 );

 export default function App();
