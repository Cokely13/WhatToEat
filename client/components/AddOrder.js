import React from 'react'
import { fetchFoods } from '../store/allFoodsStore'
import { useHistory  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../store/allOrdersStore'
import {updateSingleFood} from '../store/singleFoodStore'

function AddOrder(type) {
  const dispatch = useDispatch()
  console.log("TYPE", type)
  const [rating, setRating] = useState();
  const [foodType, setFoodType] = useState();
  const [foodId, setFoodId] = useState();
  const [updateFood, setupdateFood] = useState();
  let history = useHistory();
  const {id} = useSelector((state) => state.auth )
  const foods = useSelector((state) => state.allFoods)
  useEffect(() => {
    dispatch(fetchFoods())
  }, [])



  const handleChangeRating = (event) => {
    event.preventDefault()
    setRating(event.target.value)
  }

  const handleChangeFood = (event) => {
    event.preventDefault()
    const newFood = foods.filter((food)=>food.id == event.target.value)

    setFoodType(newFood[0].type)
    // const foodId = event.target.value[0]
    // const foodType = event.target.value[2]
    // console.log("HEY", foodId)
    // console.log("HEYEE", foodType)
    setFoodId(event.target.value)
    setupdateFood(newFood[0])
  }

  const handleClick = (event) => {
    event.preventDefault()
    const newOrder = {
      date: new Date,
      rating: rating,
      foodId: foodId,
      userId: id
    }

    // console.log("AVE",updateFood.averageRating)
    // console.log("count",updateFood.count)
    // console.log("rating",typeof(rating))
    updateFood.averageRating = (((updateFood.averageRating * updateFood.count) + (Number(rating)))) / (updateFood.count + 1)
    updateFood.count += 1

    // console.log("HYEE",updateFood.averageRating)
    dispatch(updateSingleFood(updateFood))
    dispatch(createOrder(newOrder))
    history.push(`/orders`)
  }


  return (
    <div>
  <div style={{marginLeft: "25px"}} >
    <h1 className='card border border-5  border rounded text-center bg-light' style={{width: "50%", marginLeft: "auto",marginRight: "auto", marginTop: "35px", marginBottom: "50px"}}>New Order</h1>

    <form>
        <div>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> <h2 htmlFor="assigned" style={{marginLeft: "15px"}} >Select Food </h2></label>
          <div className="col-sm-10" style={{width: "20rem"}}>
          <select style={{width: "10rem", height: "50px", marginLeft: "9rem"}}  name="assigned" onChange={handleChangeFood} className="assigned">
        <option disabled selected value="assigned">Select Food</option>
        {foods.map((( food) => <option key={food.id} value={food.id}>{food.type}</option>))}
          </select>
        </div> </div>
        <div className="form-group row">
          <label class="col-sm-2 col-form-label"> <h2 htmlFor="priority" style={{marginLeft: "15px"}} >Rating</h2></label>
          <div className="col-sm-10" style={{width: "20rem"}} >
          <select  name="priority" onChange={handleChangeRating} style={{width: "10rem", height: "50px", marginLeft: "9rem"}}>
        <option disabled selected value="priority">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          </select>
         </div>
         </div>
      </div>
    </form>
    <div className="text-center">
    <button className="btn btn-primary text-center"  onClick={handleClick}>Create Bug</button>
    </div>
  </div>
  </div>
  )
}

export default AddOrder
