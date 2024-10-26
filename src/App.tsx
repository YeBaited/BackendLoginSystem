


function App() {
  fetch('./test.php')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

  return (
    <>
      <h1 className='text-5xl'>This is login page btw</h1>
    </>
  )
}

export default App
