import { useState } from "react"



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
                {CurrentData.map(d => <h1 key={d[0]}>{d[1]}</h1>)}
            </div>
        </>
    )
}

export default Home