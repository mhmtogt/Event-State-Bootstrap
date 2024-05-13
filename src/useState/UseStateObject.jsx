import React, { useState } from 'react'

const UseStateObject = () => {

    // const [name , setName] = useState("Ahmet")
    // const [jobs , setJobs] = useState("Developer")
    // const [age , setAge]   = useState(21)


    // Alta verilen değerleri obje haline getirdik ve sonunda virgül olmalı
    const [person, setPerson] = useState({
        name: "Hilal",
        jobs:  "MBG",
        age : 24,
    })


    const {name, jobs, age} = person; // state destructure yapıldı
  return (
    <div>
        <h1>Employe Form</h1>
        <h2>Name: {name}</h2>
        <h3>Jobs: {jobs}</h3>
        <h4>Age:  {age}</h4>

        <button onClick={()=>setPerson({...person, name: "Mehmet", jobs: "Developer" ,age: age+1})}>Change Name</button>
        {/* <button onClick={()=>setJobs("CTO")}>Change Name</button>
        <button onClick={()=>setAge(29)}>Change Age</button> */}
    </div>
  )
}

export default UseStateObject