import React,{useReducer, createContext, useContext} from "react";

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,description:action.description,price:action.price,imgUrl:action.img,quantity:action.quantity,size:action.size}]
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