import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrders } from '../store/allOrdersStore'

function Orders() {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.allOrders)


  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  // const type = foods.map((({ type }) => type))
  // const pick = Math.floor(Math.random()*type.length)
  // // const pick = 1

  // console.log("foods", foods)
  // console.log("types", pick)
  return (
    <div>
    <div>Foods</div>
    {orders? orders.map((order) => {
      return (
        <div key={order.id}>
        <div >Food Id: {order.foodId}</div>
        <div>UserId: {order.userId}</div>
        <div>NEXTTTTTT</div>
        </div>
      )
      }): <div></div>}
      </div>
  )
}

export default Orders
