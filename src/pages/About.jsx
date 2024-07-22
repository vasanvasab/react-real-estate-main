import React from 'react'
import { PageHero } from '../components'
import styled from 'styled-components'
import aboutImg from '../../public/images/details-4.jpeg'
const About = () => {
  return (
    <main>
      <PageHero title={'about'}/>
<Wrapper className='page section section-center'>
<img src={aboutImg} alt='nice desk' />
      <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
          “The house you looked at today and wanted to think about until tomorrow may be the same house someone looked at yesterday and will buy today”
          </p>
        </article>
        </Wrapper>
    </main>
    
  )
}
const Wrapper=styled.section`
display: grid;
gap:4rem;
img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  

`
export default About