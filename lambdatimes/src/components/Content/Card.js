import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const CardDiv = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;`

const CardHeadline = styled.div `
  font-size: 25px;
  font-family: Didot, serif;`

const CardAuthor = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
    img {
      width: 40px;
    }
    span {
      padding-left: 10px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;`

const CardImgCont = styled.div `
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
}`

const Card = props => {
  return (
    <CardDiv>
      <CardHeadline>{props.card.headline}</CardHeadline>
      <CardAuthor>
        <CardImgCont>
          <img src={props.card.img} alt="headline" />
        </CardImgCont>
        <span>By {props.card.author}</span>
      </CardAuthor>
    </CardDiv>
  );
};

// Make sure to include PropTypes.

Card.PropTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })
}

export default Card;
