import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useProductContext } from '../context/Product_Context'
import Loading from '../components/Loading'
import Error from './Error'
import styled from 'styled-components'
import { PageHero } from '../components'
import RoomImages from '../components/RoomImages'
const SingleItem = () => {
  const { id } = useParams();
  const { single_room_loading: loading, single_room, fetchSingleRoom, single_room_error: error} = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleRoom(id);
  },[id,single_room]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [error, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!single_room) {
    return null;
  }

  const {
    name = '',
    description = '',
    capacity = 0,
    size = 0,
    price = 0,
    extras = [],
    breakfast = false,
    pets = false,
    images=[]
    
  } = single_room;

  return (
    <Wrapper>
      <PageHero title={name} room />
      <div className="section section-center page">
        <Link to="/items" className="btn">
          back to rooms
        </Link>
        <div className="room-center">
          <RoomImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <h5 className="price">${price}</h5>
            <p className="desc">{description}</p>
            <article className="info">
              <h3>info</h3>
              <h5>size : {size} SQFT</h5>
              <h5>
                max capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h5>
              <h5>{pets ? 'pets allowed' : 'no pets allowed'}</h5>
              <h5>{breakfast && 'free breakfast included'}</h5>
            </article>
            <hr />
            <section className="room-extras">
              <h3>extras </h3>
              <ul className="extras">
                {extras.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper=styled.main`
  .room-center{
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
   gap: 14px;
   font-size: 20px;
  }
  .extras{
    margin-top: 10px;
    gap: 14px;
  }
  @media (min-width: 992px) {
    .room-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }


`
export default SingleItem