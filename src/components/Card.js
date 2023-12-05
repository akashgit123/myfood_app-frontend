import React from 'react'

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  
  return (
    <div className="card mx-3 mt-3" style={{"width": "18rem"}}>
    <img src={require('../img/food1.avif')} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">
      {props.description}
      </p>
      <div className="flex-start w-100">
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
            {
              priceOptions.filter((fil)=> fil !== '_id').map((val)=>{
                return(
                  <option value={val}>{val}</option>
                )
              })
            }
        </select>
      </div>
      <div className="d-inline fw-normal mx-2">
            Total Price :
        </div>
    </div>
  </div>
  )
}
