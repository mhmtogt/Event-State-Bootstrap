import React, { useState } from 'react'
//   Normal javaScript kodu içerisinde çağırılımalıdır
//  (custom hook'lar içerisinde bir hook çağırılabilir)

export const UseStateCounter = () => {

   // let count = 0;
    // useState hooku ile count adında bir state tanımladık 
    const [count,setCount] = useState(0)



    const handleCount=()=>{
      //  count= count+1;
        setCount(count+1);
    console.log(handleCount)

    }



    return (
    <div>
        <h1>UseState Counter</h1>
        <h2> Count:{count}</h2>
        <button onClick={handleCount}>INC</button>
        <button>DEC</button>
        <button>CLR</button>

    </div>
  )
}
