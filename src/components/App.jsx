import React, { useState } from "react";

function App() {
  
var [fullName,setFullName]=useState({
          fName :"",
          lName:"",
          email:"" 
        })


  function changed(event)
  {
    var {name,value}=event.target
setFullName(PrevValue =>
  {
if (name==="fName")
    {
      return {
             fName:value,
             lName:PrevValue.lName,
             email:PrevValue.email

      }
    }else if(name==="lName")
    {
      return {
               fName:PrevValue.fName,
               lName:value,
               email:PrevValue.email
      }
    }else if(name==="email")
    {
      return {
                fName:PrevValue.fName,
                lName:PrevValue.lName,
                email:value
      }
    }
  })
  }
  
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p>{fullName.email}</p>
      <form>
        <input name="fName" onChange={changed} placeholder="First Name" />
        <input name="lName" onChange={changed} placeholder="Last Name" />
        <input name="email" onChange={changed} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
