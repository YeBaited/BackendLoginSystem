import { useState } from "react"
import CreateList from "./Components/CreateList"

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

    function ajaxRequest(dataToPass : string, fga : Function ){

        var xhtml = new XMLHttpRequest()

        xhtml.onreadystatechange = function(){
            if (this.readyState == 4 || this.readyState == 400){
                fga()
            }
        }

        xhtml.open("POST", "http://localhost:82/php/HomePanelHandling.php")
        xhtml.send(dataToPass)
    }


    function Delete(){
        const numInput = document.querySelector("#deleteSelector") as HTMLInputElement

        if (!numInput.value) return

        const data = {
            "query" : `DELETE FROM logindb.logincredentials WHERE id =" ${numInput}`
        }

        ajaxRequest(JSON.stringify(data), ()=>{
            alert("Sucessfully deleted ID:" + numInput.value)
        })

        
    }

    function Search(){

    }

    function ExecuteQuery(){

    }
    
    return (
        <>
            <div className="bg-red-300">
                <h1 className="font-bold">List of data Stored!</h1>
                <div className="bg-slate-500 min-h-[10rem]">
                    {CurrentData.map(d => <CreateList key={d[0]} Bid={d[0]} Busr={d[1]} Bpas={d[2]}   />)}

                </div>
                <div className="flex flex-col sm:flex-row py-1">
                    <button className="mx-2 px-2 border border-black" onClick={getData}>Refresh List</button>
                    <input type="number" className="mx-2 border border-black" placeholder="Enter id" id="deleteSelector"/>
                    <button className="mx-2 px-2 border border-black" onClick={Delete}>Delete</button>
                    <input type="text" className="mx-2 border border-black" placeholder="Search name"/>
                    <button className="mx-2 px-2 border border-black">Search</button>
                    <input type="text" className="mx-2 border border-black" placeholder="Custom Query"/>
                    <button className="mx-2 px-2 border border-black">Execute</button>
                    <button className="mx-2 px-2 border border-black">Go to login</button>
                </div>
            </div>
        </>
    )
}

export default Home