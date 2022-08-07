import React from 'react'
import Item from './Item'
import './ItemContainer.css'

function ItemContainer() {
  return (
    <div className='item_container'>
    <Item/>
    <Item/>
    </div>
  )
}

export default ItemContainer