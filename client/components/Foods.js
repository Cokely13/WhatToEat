import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchFoods} from '../store/allFoodsStore'

function Foods() {
  const dispatch = useDispatch()
  const foods = useSelector((state) => state.allFoods)


  useEffect(() => {
    dispatch(fetchFoods())
  }, [])

  const type = foods.map((({ type }) => type))
  const pick = Math.floor(Math.random()*type.length)
  // const pick = 1

  console.log("foods", foods)
  console.log("types", pick)
  return (
    <div>
    <div>Foods</div>
    {foods? foods.map((food) => {
      return (
        <div key={food.id}>{food.type}</div>
      )
    }) : <div></div>}
    <div>PICK: {pick}</div>
    { (pick <= 1 && pick >= 0 )  ? <div> {type[0]}</div> : <div> 1
    </div>}
    {(pick <= 2 && pick > 1 ) ? <div> {type[1]}</div> : <div> 2
    </div>}
    {(pick <= 3 && pick > 2 )   ? <div> {type[2]}</div> : <div> 3
    </div>}
    {(pick <= 4 && pick > 3 ) ? <div> {type[3]}</div> : <div> 4
    </div>}
    { (pick <= 5 && pick > 4 ) ? <div> {type[4]}</div> : <div> 5
    </div>}
    </div>
  )
}

export default Foods
