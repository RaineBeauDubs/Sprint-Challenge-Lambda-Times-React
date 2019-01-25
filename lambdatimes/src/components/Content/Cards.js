import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
  }`

const Cards = props => {
  return (
    <CardsContainer>
      {props.cards.map( card => {
        return <Card card={card} />
      })}
    </CardsContainer>
  )
}

Cards.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
}

export default Cards;