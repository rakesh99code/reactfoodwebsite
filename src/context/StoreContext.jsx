import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props)=> {

    const [CartItem,setCartItem] = useState({})

    const addToCartItem = (itemId) => {
        if(!CartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId] + 1}))
        }
    }

    const removeCartItem = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in CartItem){
            if(CartItem[item] > 0){
                let itemInfo = food_list.find((product) => product._id===item)
                totalAmount += itemInfo.price * CartItem[item];
            }
        }
        return totalAmount;
    }
    const contextValue ={food_list,CartItem,addToCartItem,removeCartItem,getTotalCartAmount}

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider