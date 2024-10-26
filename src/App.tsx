import { useEffect } from "react"

function App() {  

  const data = {
    Username : "Lol",
    Password : "Correct"
  }

  
  useEffect(() => {
    fetch("http://localhost:81/php/test.php", {
      method: "POST",
      body: JSON.stringify(data)
    })

    console.log("reloaded!")

  })


  return (
    <>
      <h1>Login Form!</h1>
      <form className="flex justify-center" method="POST" action="http://localhost:81/php/test.php">
        <input type="text" className="bg-red-500" name="Username" />
        <input type="text" className="bg-red-500" name="Password" />
        <input className="bg-red-300" type="submit" value="submit" />
      </form>
    
    </>
  )


}

export default App
