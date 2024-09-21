import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
  const {food_list}  = useContext(StoreContext)
  // console.log(category);
  return (
    <div className='food-display' id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {
            food_list.map((list,index)=>{
                if(category==="All" || category===list.category){
                  return <FoodItem key={index} id={list._id} image={list.image} name={list.name} price={list.price} description={list.description}/>
                }
            })
        }
      </div>
    </div>
  )
}

export default FoodDisplay
