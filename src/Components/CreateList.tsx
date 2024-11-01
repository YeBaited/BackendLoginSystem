interface Requirement {
    Bid: string,
    Busr: string,
    Bpas: string,
}

function CreateList({Bid, Busr, Bpas} : Requirement){
    return (
        <>
            <div className="border border-red-300 flex flex-row">
                <h1 className="mx-2"> <span className="font-bold">Id:</ span> {Bid}</h1>
                <h1 className="mx-2"> <span className="font-bold">Username:</ span> {Busr}</h1>
                <h1 className="mx-2"> <span className="font-bold">Password:</ span> {Bpas}</h1>
                
            </div>
        </>
    )
}

export default CreateList