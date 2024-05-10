import React from 'react'

 const Event = () => {

    const handleTikla = (e)=>{
        alert("tıklandı")
        console.log ("tıklandı")
        console.log(e)
        console.log(e.target)
        console.log("name:",e.target.name)
        console.log("ID:",e.target.id)
        console.log(message)

        
    }
    const handleSil=function(){
        console.log("silindi")
    }
    let message ="mem2334";


    // bir komponenetin return kısmı 3 farklı yöntem ile yeniden render edilir.
    // 1- Herhangi bir state değişirse
    // 2- Props değişirse
    // 3- Refresh force edilirse  { çok fazla tercih edilen bir durum olmaz }  



    function handleChange() {

        message = "meme2334 diye bir şey yok salladim "
    }

  return (
    <div>
        <h1>
            Events
        </h1>
        <h2>{message}</h2>
        
        <button onClick={handleTikla} id="btn"  name="my-button">Tikla </button>
        {/* Eğer bir Event fonksyonunun parametresi olması gerekiyorsa;
            bu fonksyon bir arroow fons. tarafından çağırılması gerekir. Aksi takdrde event fonksyonu event gerçekleşmeden çalışır 
            bu fonksyonu çağırırken ya parantezsiz yada arrow fonks. ile çağırılmalı */}
        <button onClick={()=>handleSil(message)}>Sil</button>
        <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default Event;


