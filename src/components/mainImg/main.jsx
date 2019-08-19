import React from "react";
import './main.css'


const Main = (props)=>{
    var divStyle = {
        backgroundImage: 'url(' + props.img + ')'
      };
    return(
    <div style={divStyle} className="main">
        <div className='outer'>
        <div className='inner'>
          <h3>TRENDING NOW</h3>
         <h1>{props.name}</h1>
         </div></div>
    </div>
    )
}

export default Main;