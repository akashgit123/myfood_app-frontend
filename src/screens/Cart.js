import React from 'react'
import { useCart, useDispatchCart } from '../context/ContextReducer';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3' style={{color:"wheat"}}>The Cart is Empty!</div>
      </div>
    )
  }
  // const handleRemove = (index)=>{
  //   console.log(index)
  //   dispatch({type:"REMOVE",index:index})
  // }

  const handleCheckOut = async () => {
 
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>

      {/* {console.log(data)} */}
      <div className='container t m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-dark table-hover'>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody style={{color:"white"}}>
            {data.map((food, index) => (
              <tr key={index} className='my-2'>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><i className=""  onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Trash</i> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 my-3' style={{color:"white"}}>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}