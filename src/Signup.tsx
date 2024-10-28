import { NavLink } from "react-router-dom"


function Signup(){

    return (
        <div className="flex justify-center">

        <form className="flex justify-center bg-white flex-col w-11/12 sm:w-3/12 p-2 sm:p-5 border border-black mt-5">
          <h1 className="mb-3 text-black text-xl font-bold">Signing Up!</h1>
          <h1 className="text-black font-semibold">Username</h1>
          <input type="text" className="border border-black  mb-5" name="Username" id="Username"/>
          <h1 className="text-black font-semibold">Password</h1>
          <input type="text" className="border border-black mb-5" name="Password" id="Password"/>

          <button className="border border-black w-4/6 m-auto">Sign Up</button>

          <NavLink to="/Home"><button className="text-blue-900 font-semibold w-fit mt-2">Already got an account?</button></NavLink>

        </form>


      </div>
    )
}

export default Signup