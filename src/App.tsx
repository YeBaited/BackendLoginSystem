import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("php/test.php")
      .then((response) => response.text())
      .then((response) => console.log(response));

      console.log("reloaded!")
  }, []);

}

export default App
