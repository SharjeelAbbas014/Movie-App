import React from 'react';
import './page.css'

export const Page = (props) => {

  return (

     <div className="card">
       <img src={props.img} alt=""/>
        <h2>{props.name}</h2>
        <p>Rating : {props.voteAvg}</p>
    </div>
  );
}

export default Page;