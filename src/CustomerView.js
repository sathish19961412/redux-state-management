import React from "react";

export default function CustomerView({customers})
{
   return(
    <>
        <h3>Customer List</h3>
        <ul style={{listStyle:'none'}}>
            {
              customers.map((customer)=><li>{customer}</li>)
            }
        </ul>
    </>
   );
}