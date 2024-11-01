import { useState } from "react"
import CreateList from "./Components/createList"


function Home(){
    const [CurrentData, SetData] = useState([])

    function getData(){
        console.log("running!")
        var xhtml = new XMLHttpRequest()
        xhtml.onreadystatechange = function(){
            if (this.readyState == 4 || this.readyState == 400){
                if (!this.response) return
                SetData(JSON.parse(this.response))
            } 
        }
        
        xhtml.open("POST", "http://localhost:82/php/GetAllData.php")
        xhtml.send()
    
    }

    console.log(CurrentData)
    
    return (
        <>
            <div>
                <button onClick={getData}>Refresh</button>
                {CurrentData.map(d => <CreateList Bid={d[0]} Busr={d[1]} Bpas={d[2]}   />)}
            </div>
        </>
    )
}

export default Home