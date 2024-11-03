import React from "react";
import {useSelector} from "react-redux";
export default function CustomerView()
{
    const customers=useSelector((state)=>state.customers)
    function deleteHandler(index){

    }
   return(
    <>
        <h3>Customer List</h3>
        <ul style={{listStyle:'none'}}>
            {
                customers.map((customer,index)=><li>{customer} <button onClick={()=>deleteHandler(index)}>Delete</button></li>)
            }
        </ul>
    </>
   );
}