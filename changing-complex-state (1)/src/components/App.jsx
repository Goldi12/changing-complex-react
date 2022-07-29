import React, { useState } from "react";

function App() {

const [fName, setfName] = useState("");  
const [lName, setlName] = useState(""); 

function updatefName(event){
  setfName(event.target.value);
      }

function updatelName(event){
  setlName(event.target.value)

}      


  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input onChange={updatefName} name="fName" placeholder="First Name" value={fName} />
        <input onChange={updatelName} name="lName" placeholder="Last Name" value={lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
