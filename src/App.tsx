import {InputHTMLAttributes, useEffect, useState } from "react"

function App() {  
  
  function HandleLogin(e : HTMLFormElement){
    e.preventDefault()
    const Usr = document.querySelector("#Username") as HTMLInputElement

    if (!Usr){
      return
    }

    let data = {
      Username : "admin",
      Password : "admin"
    }

    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function(){
      console.log("State changed!")
      if (!this.response){
        return
      }
      console.log(JSON.parse(this.response))
      //console.log(this.response)
      
    }
    xmlHttp.open("POST", "http://localhost:81/php/test.php",)

    xmlHttp.send(JSON.stringify(data))
  }

  return (
    <>
      <h1>Login Form!</h1>
      <form className="flex justify-center" onSubmit={e => HandleLogin(e)}>
        <input type="text" className="bg-red-500" name="Username" id="Username"/>
        <input type="text" className="bg-red-500" name="Password" id="Password"/>
        <button className="bg-red-400">test</button>
      </form>
    
    </>
  )


}

export default App
