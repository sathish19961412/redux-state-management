import React,{useState} from "react";

export default function CustomerAdd(){

    const [input,setInput]=useState("");
    const [customer,setCustomer]=useState([]);

    function addCustomer(){
        if(input){
            setCustomer((previousState)=>[...previousState,input])
            console.log(customer);
        }
    }
    return(
        <>
            <h3>Add New Customer</h3>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <button onClick={addCustomer}>Add</button>
        </>
    )
}