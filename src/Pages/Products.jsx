import React from 'react'
import Productcard from '../Components/Product/Productcard';
import productdata from '../Components/Product/Productdata';
function Products() {
  return (
    <>
    {
        productdata.map((item)=>{
            return(
        <Productcard data={item}/>

            )
        })
    }
      

</>

   
  )
}

export default Products;