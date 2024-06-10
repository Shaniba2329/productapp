import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data,changeData]=useState(
        [
            {"productname":"bag","productid":34,"price":450,"description":"trsyj"},
         {"productname":"book","productid":76,"price":700,"description":"trsyj"},
        {"productname":"pen","productid":56,"price":480,"description":"trsyj"}]
    )
  return (
    <div>
        <Navbar/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">productname</th>
      <th scope="col">productid</th>
      <th scope="col">price</th>
      <th scope="col">description</th>
    </tr>
  </thead>
  <tbody>
   {data.map(
    (value,index)=>{
        return  <tr>
        <th scope="row">{value.productname}</th>
        <td>{value.productid}</td>
        <td>{value.price}</td>
        <td>{value.description}</td>
      </tr>
    }
   )}
    </tbody>
</table> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall