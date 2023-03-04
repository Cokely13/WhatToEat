import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchFoods} from '../store/allFoodsStore'

function Selector() {
  const dispatch = useDispatch()
  const [random, setRandom] = useState();
  const foods = useSelector((state) => state.allFoods)


  useEffect(() => {
    dispatch(fetchFoods())
  }, [])

  const type = foods.map((({ type }) => type))
  const pick = Math.floor(Math.random()*type.length)
  // const pick = 1

  console.log("foods", foods)
  // console.log("types", pick)


  const handlePick= (event) =>{
    event.preventDefault()
    setRandom(Math.floor(Math.random()*type.length))
    console.log(random)
  }

  return (
    <div>
    <div>Selector</div>
   <button onClick={handlePick}>Pick Food</button>
    <div>PICK: {random}</div>
    { (random <= 1 && random >= 0 )  ? <div> {type[0]}</div> : <div> 1
    </div>}
    {(random <= 2 && random > 1 ) ? <div> {type[1]}</div> : <div> 2
    </div>}
    {(random <= 3 && random > 2 )   ? <div> {type[2]}</div> : <div> 3
    </div>}
    {(random <= 4 && random > 3 ) ? <div> {type[3]}</div> : <div> 4
    </div>}
    { (random <= 5 && random > 4 ) ? <div> {type[4]}</div> : <div> 5
    </div>}
    </div>
  )
}

export default Selector
