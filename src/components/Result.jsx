import React from "react";
import "./style/Result.css";

const Result = ({ text }) => {
  return (
    <div
      className="result"
      style={{ backgroundColor: "white", height: "70vh" }}
    >
      <h1 style={{marginLeft:"20px",marginTop:"40px"}}>Results:</h1>
      <div
        style={{
          alignItems:"center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {text.map((item) => (
          <div style={{
            
            width: "60%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}>
          <input
            value={item}
            style={{ marginTop: "10px" }}
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
