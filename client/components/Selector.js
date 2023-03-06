import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchFoods} from '../store/allFoodsStore'
import AddOrder from './AddOrder'

function Selector() {
  const dispatch = useDispatch()
  const [random, setRandom] = useState();
  const [selected, setSelected] = useState();
  const foods = useSelector((state) => state.allFoods)


  useEffect(() => {
    dispatch(fetchFoods())
  }, [])
  const totalRatings = foods.map((({ averageRating }) => averageRating)).reduce((a, b) => {
    return a + b;
  }, 0);

  const type = foods.map((({ type }) => type))
  const pick = (Math.random()*totalRatings)
  // const pick = 1

  console.log("foods", totalRatings)
  // console.log("types", pick)

  // total rating = 30.3/

  const handlePick= (event) =>{
    event.preventDefault()
    setRandom(Math.random()*totalRatings)
    console.log(random)
  }

  return (
    <div>
    <h1 className='card border border-5  border rounded text-center bg-light' style={{width: "50%", marginLeft: "auto",marginRight: "auto", marginTop: "35px", marginBottom: "50px"}}>Selector</h1>
   <button onClick={handlePick}>Pick Food</button>
    <div>PICK: {random}</div>
    {foods[0]?  (random <= foods[0].averageRating && random >= 0 )  ? <div><div> {type[3]} </div> <button> Order</button> </div>: <div> 1</div> : <div>NADA</div> }
    {foods[1]?  (random <= (foods[0].averageRating + foods[1].averageRating) && random > foods[0].averageRating ) ? <div><div> {type[1]} </div> <button> Order</button> </div>: <div> 2
    </div>: <div>NADA</div> }
    {foods[2]?(random <= (foods[0].averageRating + foods[1].averageRating + foods[2].averageRating) && random > (foods[0].averageRating + foods[1].averageRating) )   ? <div><div> {type[2]} </div> <button> Order</button> </div> : <div> 3
    </div>: <div>NADA</div> }
    {foods[3]?(random <= (foods[0].averageRating + foods[1].averageRating + foods[2].averageRating + foods[3].averageRating ) && random > (foods[0].averageRating + foods[1].averageRating + foods[2].averageRating) ) ?<div><div> {type[3]} </div> <button> Order</button> </div>: <div> 4
    </div> : <div>NADA</div> }
    {foods[4]? (random <= (foods[0].averageRating + foods[1].averageRating + foods[2].averageRating + foods[3].averageRating + foods[4].averageRating ) && random > (foods[0].averageRating + foods[1].averageRating + foods[2].averageRating + foods[3].averageRating ) ) ? <div><div> {type[4]} </div> <button> Order</button> </div> : <div> 5
    </div>: <div>NADA</div> }

    {random ? <AddOrder type={selected}/> : <div></div>}
    </div>
  )
}

export default Selector
