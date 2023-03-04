import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../store/allOrdersStore'
import { fetchFoods } from '../store/allFoodsStore'

function Orders() {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.allOrders)
  const foods = useSelector((state) => state.allFoods)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [])
  useEffect(() => {
    dispatch(fetchFoods())
  }, [])

  // const type = foods.map((({ type }) => type))
  // const pick = Math.floor(Math.random()*type.length)
  // // const pick = 1
  // foods.map((({ type }) => type)).filter((food) => food.id == 1)
  // console.log("EST", foods.map((({ type }) => type)).filter((food) => food.id == 3))

  console.log("foods", orders)
  // console.log("types", pick)
  return (
    <div>
    <div>Orders</div>
    <div className="row text-center" style={{marginLeft: "auto",marginTop: "15px", marginRight:"auto"}}>
    {orders? orders.map((order) => {
      return (
        <div  className="card border border-5  border-warning rounded" style={{width:"28rem", marginLeft: "30px", marginRight: "15px",marginBottom: "40px",marginTop: "40px", }} key={order.id}>
        {order.food? <div>{order.food.type}</div> : <div></div>}
        <div>Rating: {order.rating}</div>
        <div>Date: {order.date}</div>
        </div>
      )
      }): <div></div>}
      </div>
      </div>
  )
}

export default Orders
