import React from 'react'

export default function Card() {
  return (
    <div className="card mx-3 mt-3" style={{"width": "18rem"}}>
    <img src={require('../img/food1.avif')} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
         content.
      </p>
      <div className="container w-100">
        <select className="m-2 h-100  bg-primary">
            {
                Array.from(Array(6),(v,k)=>{
                    return(
                        <option value="{k_1}">{k+1}</option>
                    )
                })
            }
        </select>
        <select className="m-2 h-100 bg-primary">
            <option value="half">Half</option>
            <option value="full">Full</option>
        </select>

        <div className="d-inline fw-normal">
            Total Price :
        </div>
      </div>
    </div>
  </div>
  )
}
