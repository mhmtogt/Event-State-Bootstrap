import React, { useState } from 'react'
//   Normal javaScript kodu içerisinde çağırılımalıdır
//  (custom hook'lar içerisinde bir hook çağırılabilir)

// hooklar componentin en üstünde nested yani if for içinde olmicak şekilde tanımlanmalıdır top seviyede tanımlanması gerekir
// bir hook react componentinin içinde kullanılır componentin dışında kullanılamaz js olsa bile

export const UseStateCounter = () => {

   // let count = 0;
    // useState hooku ile count adında bir state tanımladık 
    const [count,setCount] = useState(0)



    const handleCount=()=>{
      //  count= count+1;
        setCount(count+1);
    console.log(handleCount)

    }
    const handleDec=()=>{
      if(count>0){
        setCount(count-1);
      }else{
        alert("counter cannot be negative")
      }
    }



    return (
    <div>
        <h1>UseState Counter</h1>
        <h2> Count:{count}</h2>
        <button onClick={handleCount}>INC</button>
        {/*Eğer setCount metodunu callback(arow fonc) ile yazmasak bu metot ilk açılıştan itibaren doğrudan çalışmış olur
           Bu durumda da count state'ini günceller , State güncellendiği içinde componenet re-render olur 
           Re-render ise setCount araccılığı ile state'in güncellenmesine yol açar ve sonsuz döngüye girer*/}

        {/* <button onClick={()=>{count>0 &&   setCount(count-1)}}>DEC</button>           "ALTERNATİF YÖNTEM" */}


        <button onClick={handleDec}>DEC</button>
        <button onClick={()=>{setCount(0 )}}>CLR</button>

    </div>
  )
}
