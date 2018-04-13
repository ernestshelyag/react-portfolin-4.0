import React from 'react';
import styled from 'styled-components'

const Wrp = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Error () {
  return (
    <Wrp>
      <h1 style = {{ fontSize: '60px' }} > 404 </h1>
      <p> Такой страницы не существует. :c </p>
      <a href = '/' > на Главную </a>
    </Wrp>
  )
}

export default Error;
