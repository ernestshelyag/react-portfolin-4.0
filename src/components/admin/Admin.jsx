import React from 'react';
import styled from 'styled-components'

// - - - - - styles

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// - - - - - styles end

function Admin(){
  return (
    <Form>
      <input type="password" placeholder = "пароль"/>
    </Form>
  )
}

export default Admin;
