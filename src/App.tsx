import {InputHTMLAttributes, useEffect, useState } from "react"

function App() {  
  
  function HandleLogin(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const Usr = document.querySelector("#Username") as HTMLFormElement

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
      <div className="flex justify-center">

        <form className="flex justify-center bg-white flex-col w-11/12 sm:w-3/12 p-2 sm:p-5 border border-black mt-5" onSubmit={e => HandleLogin(e)}>
          <h1 className="mb-3 text-black text-xl font-bold">Login</h1>
          <h1 className="text-black font-semibold">Username</h1>
          <input type="text" className="border border-black  mb-5" name="Username" id="Username"/>
          <h1 className="text-black font-semibold">Password</h1>
          <input type="text" className="border border-black mb-5" name="Password" id="Password"/>

          <button className="border border-black w-4/6 m-auto">Login</button>
          <button className="text-blue-900 font-semibold w-fit mt-2">Don't have an account?</button>

        </form>


      </div>
    
    </>
  )


}

export default App
