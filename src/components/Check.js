import React, { useEffect, useState } from 'react'

function Check() {
    const [data, setdata] = useState("")
let setname=()=>{
    setdata("Sachin")
}

useEffect(()=>{
    if(data){
        console.log(`useEffect will get executed when name is Set to ${data}`);
    }
},[data])
    return (
        <div>
            <h1>Name: {data}</h1>     
            <button onClick={setname}>Set Name</button>       
        </div>
    )
}

export default Check
