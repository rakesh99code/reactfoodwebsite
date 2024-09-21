import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import "./FoodItem.css"
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, image,name,price,description}) => {
    const {CartItem,addToCartItem,removeCartItem} = useContext(StoreContext);

    return(
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className="food-item-img" src={image} alt="" />
                {
                    !CartItem[id]?<img className="add" src={assets.add_icon_white} onClick={()=>addToCartItem(id)}></img>:
                    <div className='food-item-counter'>
                        <img onClick={()=>removeCartItem(id)} src={assets.remove_icon_red} alt="" />
                        <p>{CartItem[id]}</p>
                        <img onClick={()=>addToCartItem(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p> 
            </div>
            
            
            
        </div>
    )
}

export default FoodItem