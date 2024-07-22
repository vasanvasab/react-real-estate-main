

import React, { useState } from 'react'
import { useFilterContext } from '../context/filter_Context'
import { getUniqueValues } from '../utils/helpers'
import styled from 'styled-components'

const Filters = () => {
  const {
    all_rooms,
    filters: {
      maxPrice,
      price,
      minPrice,
      maxSize,
      minSize,
      size,
      pets,
      breakfast,
      guests,
      maxGuests,
      text,
      type
    },
    filtered_rooms,
    updateFilters,
    clearFilters
  } = useFilterContext()

  const types = getUniqueValues(all_rooms, 'type')
  console.log(types)

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='search'
              onChange={updateFilters}
              className='search-input'
            />
          </div>

          <div className='form-control'>
            <h5>room types</h5>
            <div>
              {types.map((t, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='type'
                    
                    className={`${type === t.toLowerCase() ? 'active' : ''}`}
                    onClick={updateFilters}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>

          <div className='form-control'>
            <h5>Number of guests</h5>
            <select
              name='guests'
              value={guests}
              onChange={updateFilters} 
              className='room'
            >
                <option value='any'>Any</option>
              {Array.from({ length: maxGuests }, (_, index) => {
                const amount = index + 1
                return (
                  <option key={amount} value={amount}>
                    {amount}
                  </option>
                )
              })}
            </select>
          </div>

          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{price}</p>
            <input
              type='range'
              name='price'
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>

          <div className='form-control'>
            <h5>room size(sq ft)</h5>
            <p className='size'>{size}</p>
            <input
              type='range'
              name='size'
              onChange={updateFilters}
              min={minSize}
              max={maxSize}
              value={size}
            />
          </div>

          <div className='form-control breakfast'>
            <label htmlFor='breakfast'>breakfast</label>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={updateFilters}
            />
          </div>

          <div className='form-control pets'>
            <label htmlFor='pets'>pets</label>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={updateFilters}
            />
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .room {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .breakfast,
  .pets {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
