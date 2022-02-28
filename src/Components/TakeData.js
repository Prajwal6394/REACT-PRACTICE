import React from "react";
import { useState } from "react";
import db from "../firebase";

const TakeData = () => {
  const [name, setname] = useState("");
  const [mobile, Setnum] = useState("");
  const [college, setcollege] = useState("");
  const sub = (e) => {
    e.preventDefault();

    db.collection("data")
      .add({
        Name: name,
        MobileNum: number,
        College: collegename
      })

      .then((docRef) => {
        alert("Data Submitted");
      })

      .catch((error) => {
        console.error("Error Detected", error);
      });
  };
  return (
    <div>
      <center>
        <form style = {{marginTop: "200px"}} onSubmit = {(event) => {sub(event)}}>
          <input type = "text" placeholder="Prajwal" onChange={(e) =>{setname(e.target.value)}} />
          <br/>
          <br/>
          <input type= "number" placeholder="926242265" onChange={(e) => {Setnum(e.target.value)}}/>
          <br/>
          <br/>

          <input type = "text" placeholder="BBDNIIT" onChange={(e) => {setcollege(e.target.value)}}/>
          <br/>
          <br/>
          <button type = "submit">Submit</button>
        </form>
      </center>
    </div>
  );
};

export default TakeData;
