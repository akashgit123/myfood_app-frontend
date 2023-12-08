import React,{useReducer, createContext, useContext} from "react";

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,description:action.description,price:action.price,imgUrl:action.img,quantity:action.quantity,size:action.size}]
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr;
        case "UPDATE":
            let arr = [...state];
            arr.find((food,index)=>{
                if(food.id === action.id){
                    console.log();
                    arr[index] = {...food,quantity:action.quantity,price:action.price}
                }
                return arr
            })
            return arr;
        case "DROP" :
            let emptyArr = [];
            return emptyArr;
        default :
            console.log("Error in dispatch case name check ")
    }
}

export const CartProvider =({children})=>{
    const [state,dispatch] = useReducer(reducer,[]);

    return(
        <cartDispatchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state} >
                {children}
            </cartStateContext.Provider>
        </cartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);