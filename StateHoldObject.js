import React,{useState} from 'react'
export default function StateHoldDbject(){
    const[college,setCollege]=useState({cid:1,cname:"skct",year:2023})
    const chaneDome=()=>{
        setCollege((prevState)=>{return{...prevState,year:2024}})
    }
    return(
        <div>
            <h1>College ID is{college.cid}</h1>
            <h1>College name is{college.cname}
            </h1>
            <h1>Year{college.year}</h1>
            <button onClick={chaneDome}>changeYear</button>
        </div>
    )
}