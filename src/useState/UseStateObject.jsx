import React, { useState } from 'react'

const UseStateObject = () => {

    const [name , setName] = useState("Ahmet")
    const [jobs , setJobs] = useState("Developer")
    const [age , setAge]   = useState(21)

  return (
    <div>
        <h1>Employe Form</h1>
        <h2>Name: {name}</h2>
        <h3>Jobs: {jobs}</h3>
        <h4>Age:  {age}</h4>

        <button onClick={()=>setName("Mehmet")}>Change Name</button>
        <button onClick={()=>setJobs("CTO")}>Change Name</button>
        <button onClick={()=>setAge(29)}>Change Age</button>
    </div>
  )
}

export default UseStateObject