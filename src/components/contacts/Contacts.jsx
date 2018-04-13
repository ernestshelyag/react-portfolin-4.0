import React from 'react';
import styled from 'styled-components'

// - - - - - styles

const ContactsBlock = styled.div`
  & span {
    display: inline-block;
    width: 160px;
  }
  & li {
    font-size: 25px;
    margin-bottom: 5px;
  }
`;

// - - - - - styles end

function Contacts(){
  return (
    <ContactsBlock className = 'wrp'>
      <h1> Контакты </h1>
      <ul>
        <li><span>Телефон : </span><a href="tel:+79021390379">+7(902)139-03-79</a></li>
        <li><span>E-mail : </span><a href="ernest.shelyag@gmail.com">ernest.shelyag@gmail.com</a></li>
        <li><span>Head hunter :</span><a href="#">aaaassss</a></li>
        <li><span>Telegram : </span><a href="https://telegram.me/ernest_shelyag">ernest_shelyag</a></li>
      </ul>
    </ContactsBlock>

  )
}

export default Contacts;
