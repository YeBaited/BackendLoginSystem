function cookData(data : []){
    console.log(JSON.parse(data))

}

function getData(){
    var xhtml = new XMLHttpRequest()
    xhtml.onreadystatechange = function(){
        if (this.readyState == 4 || this.readyState == 400){
            if (!this.response) return
            cookData(this.response)
        } 
    }

    xhtml.open("POST", "http://localhost:82/php/GetAllData.php")
    xhtml.send()
}

function Home(){
        getData()
    return (
        <h1>Test</h1>
    )
}

export default Home