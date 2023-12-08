import { useState,useContext } from "react";
import { UserContext } from "../context/user";

export const useAuth =() =>{
    return useContext(UserContext);
}

export const useProvideAuth = () =>{
    
    const userUrl = "http://localhost:7000/api/user";
    const foodUrl = "http://localhost:7000/api/foodData";
    const categoryUrl = "http://localhost:7000/api/foodCategory";
    const orderUrl = "http://localhost:7000/api/myOrders";

    const [userData,setUserData] = useState(null);

    const login = async(email,password) =>{
        const response =await fetch(`${userUrl}/login`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email:email,
                password:password
            })
        })

        let data = await response.json();
        setUserData(data);
        return data;
    }

    const signup = async(name,email,location,password) =>{
        const response =await fetch(`${userUrl}/createUser`,{
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

    const allFoodData = async() =>{
        const response =await fetch(`${foodUrl}/fetchAllFood`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
        })

        let data = await response.json();
        return data;
    }

    const allFoodCategory =async() =>{
        const response =await fetch(`${categoryUrl}/fetchFoodCategory`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
        })

        let data = await response.json();
        return data;
    }

    const addUserOrder = async(orderData,email) =>{
        console.log(orderData);
        const response = await fetch(`${orderUrl}/addOrders`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({
                userEmail:email,
                orderDetails:orderData,
                orderDate: new Date().toDateString()
            })
        });
        let data = await response.json();
        return data;

    }

    return {userData,login,signup,allFoodData,allFoodCategory,addUserOrder};
}

