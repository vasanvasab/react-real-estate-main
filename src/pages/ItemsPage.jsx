import React from 'react'
import { Filters, ItemsList, PageHero, Sort } from '../components'
import styled from 'styled-components'

const ItemsPage = () => {
  return (
    <main>
<PageHero title={'rooms'}/>
 <Wrapper className='page'>
 <div className='section-center items'>
          <Filters />
          <div>
            <Sort />
            <ItemsList />
          </div>
        </div>
 </Wrapper>
    </main>
  )
}
const Wrapper=styled.div`
  .items{
   display: grid;
   gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .items {
      grid-template-columns: 200px 1fr;
    }
  }

`
export default ItemsPage