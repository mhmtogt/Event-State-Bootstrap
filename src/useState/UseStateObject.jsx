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

    //let toggle = false;
    const [toggle,setToggle] = useState(false);

    const handleReChange = ()=>{
        //toggle = !toggle

        setToggle(!toggle )

        console.log(toggle) // bunu dışa yazarsan sadece ilk değerini yazar ve bir daha render edilmez

        if(toggle){
            setPerson(
                ({
                    name: "Hilal",
                    jobs:  "MBG",
                    age : 24,
                })
            )

        }else {
            setPerson(
                ({
                    name: "Mehmet",
                    jobs:  "Developer",
                    age : 26,
                })
            )

        }
    }

    const {name, jobs, age} = person; // state destructure yapıldı
  return (
    <div>
        <h1>Employe Form</h1>
        <h2>Name: {name}</h2>
        <h3>Jobs: {jobs}</h3>
        <h4>Age:  {age}</h4>

        <button onClick={()=>setPerson({...person, name: "Mehmet", jobs: "Developer" ,age: age+1})}>Change </button>
        {/* <button onClick={()=>setJobs("CTO")}>Change Name</button>
        <button onClick={()=>setAge(29)}>Change Age</button> */}
        <button onClick={handleReChange}>ReChange</button>
    </div>
  )
}

export default UseStateObject