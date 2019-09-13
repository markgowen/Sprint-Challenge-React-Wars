import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 30%;
  background: #0f0b0d;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 2% auto;
  padding: 1%;
`;

const CardName = styled.h1`
  color: #2c8bcf;
`;

const CardText = styled.p`
  color: #ab856e;
`;

const StarWarsCard = props => {
  return (
    <Card key={props.id}>
      <CardName>{props.name}</CardName>
      <CardText>Gender: {props.gender}</CardText>
      <CardText>Height: {props.height}</CardText>
      <CardText>Mass: {props.mass}</CardText>
    </Card>
  );
};

export default StarWarsCard;
