import { NavLink, useNavigate } from "react-router-dom"



function App() {   
  const navigate = useNavigate();
  
  function HandleLogin(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()
  
  
    const Usr = document.querySelector("#Username") as HTMLInputElement
    const Pas = document.querySelector("#Password") as HTMLInputElement
  
    let Saved = {
      "Username" : Usr.value, 
      "Password" : Pas.value
    }
  
  
    var req = new XMLHttpRequest()
  
    req.onreadystatechange = function(){
  
  
      if (this.readyState == 4 || this.status == 400) {
        if (!this.response) return
      
        const d = JSON.parse(this.response)
      
        alert(d["reason"])
        if (!d["canLogin"]) return
        
        document.cookie = "data=" + d["CookieToSend"]
        navigate("/Home")
  
      } 
  
    }
    req.open("POST", "http://localhost:82/php/Login.php")
    req.send(JSON.stringify(Saved))
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
          <NavLink to="/Signup"><button className="text-blue-900 font-semibold w-fit mt-2">Don't have an account?</button></NavLink>

        </form>


      </div>
    
    </>
  )


}

export default App
