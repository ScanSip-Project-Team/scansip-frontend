import timer from "./../assets/timer.svg"

const UserPaiement=()=>{
    const numberOfSecond = 160
    let estimateTime = Math.ceil(numberOfSecond / 60)
    return<>
    <main className=" mx-2.5 flex flex-col items-center">
        <div className="flex gap-2.5 justify-center items-center py-20" ><img src={timer} alt="icone d'une horloge noir et blanche" className=""/>
        <p className="text-xs font-medium">Temps d'attente estimé : {estimateTime.toString()} minutes</p></div>
        <h1 className="text-sm font-medium w-full text-center py-5px border-y border-grey-232">Paiement</h1>
        </main></>
}

export default UserPaiement