import React, { useState,useRef,useEffect } from 'react';
import { useCart,useDispatchCart } from '../context/ContextReducer';

export default function Card(props) {
  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();

  let options = props.options;
  let priceOptions = Object.keys(options);

  const [qty,setQty] = useState(1)
  const [size,setSize] = useState(" ");
  const totalPrice = qty * parseInt(options[size])

  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])

  const handleAddtoCart = async()=>{ 
    let food =[];
    for(const item of data){
      if(item.id === props.foodItem._id){
        food=item;
        break;
      }
    }
    if(food.length !== 0){
      if(food.size === size){
        await dispatch({type:"UPDATE",id:props.foodItem._id,price:totalPrice,quantity:qty});
        console.log("cart data qty change: ");
        return
      }
      else if(food.size !== size){
        await dispatch({type:'ADD',id:props.foodItem._id,name:props.foodItem.name,description:props.foodItem.description,price:totalPrice,imgUrl:props.foodItem.img,quantity:qty,size:size})
        console.log("cart data same item size change: ", data);
        return
      }
      return
    }
      await dispatch({type:'ADD',id:props.foodItem._id,name:props.foodItem.name,description:props.foodItem.description,price:totalPrice,imgUrl:props.foodItem.img,quantity:qty,size:size})
      console.log("cart data: new item ", data);
    
  }
  
  return (
    <div className="card mx-3 mt-3" style={{"width": "18rem"}}>
    <img src={require('../img/food1.avif')} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}} />
    <div className="card-body">
      <h5 className="card-title">{props.foodItem.name}</h5>
      <p className="card-text">
      {props.foodItem.description}
      </p>
      <div className="flex-start w-100">
        <select className="m-2 h-100  bg-primary" onChange={(e)=>{setQty(e.target.value)}}>
            {
                Array.from(Array(6),(v,k)=>{
                    return(
                        <option key={k+1} value={k+1}>{k+1}</option>
                    )
                })
            }
        </select>
        <select className="m-2 h-100 bg-primary" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
            {
              priceOptions.filter((fil)=> fil !== '_id').map((val)=>{
                return(
                  <option key={val} value={val}>{val}</option>
                )
              })
            }
        </select>
        </div>
        <div className='d-inline'>
        <div className="flex-end fw-bold mx-2 my-2">
            Total Price : {totalPrice}
        </div>
          <button type="button" className="btn btn-primary" onClick={handleAddtoCart}>Add to Cart</button>
        </div>
      
    </div>
  </div>
  )
}
