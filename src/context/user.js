import { createContext } from "react";
import { useProvideAuth } from "../hooks";

let initialState = {
    userData : null ,
    cartState : null,
    login : () =>{},
    signup : ()=>{},
    allFoodData : ()=>{},
    allFoodCategory : ()=>{},
    addUserOrder : ()=>{}
}

export const UserContext =createContext(initialState);

export const UserProvider = ({children}) =>{
    const auth = useProvideAuth();

    return <UserContext.Provider value={auth}>{children}</UserContext.Provider>
}
