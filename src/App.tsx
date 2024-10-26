import { useEffect } from "react";

function App() {

  useEffect(() => {

    const response = fetch("php/test.php", {
      method: "POST",
      body: JSON.stringify({ username: "example" })

    })
      .then((response) => response.text())
      .then((response) => console.log(response));

    
    console.log(response);
  }, []);


}

export default App
