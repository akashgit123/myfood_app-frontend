import { useState,useContext } from "react";
import { UserContext } from "../context/user";

export const useAuth =() =>{
    return useContext(UserContext);
}

export const useProvideAuth = () =>{
    
    const url = "http://localhost:7000/api/user";
    
    const [userData,setUserData] = useState(null);

    const login = async(email,password) =>{

    }

    const signup = async(name,email,location,password) =>{
        const response =await fetch(`${url}/createUser`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:name,
                email:email,
                location:location,
                password:password
            })
        })

        let data = await response.json();
        setUserData(data);
        return data;
    }

    return {userData,login,signup};
}

