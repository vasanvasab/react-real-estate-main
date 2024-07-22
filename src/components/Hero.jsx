import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import heroBcg from '../../public/images/room-2.jpeg'
const Hero = () => {
  return (
    <Wrapper className='section-center'>

        <article>
        <h1>
          find your <br />
          comfort zone
        </h1>
        <p>
          LOOKING FOR A NEW HOUSE WITH LOWEST PRICE!!!
        </p>
        <Link to='/items' className='btn hero-btn'>
          Find your room
        </Link>
        </article>

        <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        
      </article>
    </Wrapper>
  )
}
const Wrapper=styled.section`
    min-height: 60vh;
    display: grid;
    place-items: center;
    .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
   
  }


`
export default Hero