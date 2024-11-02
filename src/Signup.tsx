import React, { FormEvent } from "react"
import { NavLink } from "react-router-dom"

const IllegalLetter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 

function createAccount(e : FormEvent<HTMLFormElement>){
  e.preventDefault()

  const Usr = document.querySelector("#Username") as HTMLInputElement
  const Pas = document.querySelector("#Password") as HTMLInputElement

  if(IllegalLetter.test(Usr.value) || IllegalLetter.test(Pas.value)){
    console.log("Contains illegal string patterns!")
    return
  }

  let dat = {
    "Username" : Usr.value,
    "Password" : Pas.value
  }

  var req = new XMLHttpRequest();

  req.onreadystatechange = function(){
    if (this.readyState == 4 || this.readyState == 400){
      console.log("Received the data for signup!")
      if (!this.response) return
      const decode = JSON.parse(this.response)

      if (!decode["Reason"]) return 
      alert(decode["Reason"])

    }
  }

  req.open("POST", "http://localhost:82/php/CreateAccount.php")
  req.send(JSON.stringify(dat))
  
}

function Signup(){

    return (
        <div className="flex justify-center">

        <form className="flex justify-center bg-white flex-col w-11/12 sm:w-3/12 p-2 sm:p-5 border border-black mt-5" onSubmit={e => createAccount(e)}>
          <h1 className="mb-3 text-black text-xl font-bold">Signing Up!</h1>
          <h1 className="text-black font-semibold">Username</h1>
          <input type="text" className="border border-black  mb-5" name="Username" id="Username"/>
          <h1 className="text-black font-semibold">Password</h1>
          <input type="text" className="border border-black mb-5" name="Password" id="Password"/>

          <button className="border border-black w-4/6 m-auto">Sign Up</button>

          <NavLink to="/"><button className="text-blue-900 font-semibold w-fit mt-2">Already got an account?</button></NavLink>

        </form>


      </div>
    )
}

export default Signup