import React from 'react'
import ItemContainer from './ItemContainer/ItemContainer'
import './Home.css'
import Slider from './Slider/Slider'

function Home() {
  return (
    <div>
      <Slider/>
      <div className='body'>
      <ItemContainer/>
      </div>
    </div>
  )
}

export default Home