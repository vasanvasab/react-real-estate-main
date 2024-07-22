import React from 'react'
import { useFilterContext } from '../context/filter_Context'
import ListView from './ListView'
import GridView from './GridView'


const ItemsList = () => {
  const{filtered_rooms:rooms,grid_view}=useFilterContext()
  if (rooms.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no rooms matched your search.
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView rooms={rooms} />
  }
  return <GridView rooms={rooms} />

}

export default ItemsList