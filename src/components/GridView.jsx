import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const GridView = ({rooms}) => {
  return (
    <Wrapper>
    <div className='rooms-container'>
      {rooms.map((room) => {
        return <Item key={room.id} {...room} />
      })}
    </div>
  </Wrapper>
  )
}

const Wrapper=styled.section`

img {
    height: 175px;
  }

  .rooms-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .rooms-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .rooms-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

`

export default GridView