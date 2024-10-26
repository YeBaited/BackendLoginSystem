function App() {  

  return (
    <>
    
      <div className="flex justify-center">
        <form className="bg-red-200 p-5" action="php/test.php" method="POST">
          <h1>Username:</h1>
          <input className="bg-red-300" type="text" name="Username"/>
          <h1>Password:</h1>
          <input className="bg-red-300" type="text" name="Password"/>
          <br />
          <input type="submit" />

        </form>
      </div>
    </>
    
  )


}

export default App
