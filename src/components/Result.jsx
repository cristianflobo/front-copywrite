import React from "react";
import "./style/Result.css"

const Result = ({ text }) => {
  return (
    <div className="result" style={{backgroundColor:"white", height:"70vh"}}>
        <h1 >Result</h1>
        <div >
      {text.map((item) => (
        <input value={item} style={{marginTop:"10px"}} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      ))}
      </div>
    </div>
  );
};

export default Result;
