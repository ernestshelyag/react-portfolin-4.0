import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components'
import Scene from './Scene.jsx'

// - - - - - styles

const H1 = styled.h1`
  color: #49C5B6;
  font-size: 60px;
  margin: -5vh 0 20px;
  @media (max-width: 700px) {
    font-size: 30px;
    margin: -2vh 0 10px;
  }
`;
const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    font-size: 18px;
    margin: 5px 0;
  }
`;
const P = styled.p`
  max-width: 40vw;
  @media (max-width: 700px) {
    max-width: 90vw;
  }
`;

const Button = styled.button`
  text-align: center;
  width: 120px;
`;

const Container = styled.section`
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

// - - - - - styles end

class Hero extends Component {
  constructor (props) {
    super (props);
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    this.setState ({
      isOpen: !this.state.isOpen
    })
  };

  render () {
    const aboutSiteText = this.state.isOpen &&
      <P>
        Этот небольшой сайт сделан мной на React при помощи create-react-app. При его разработке я впервые частично попробовал подход "CSS in JS" с использованием библиотеки styled-components.         {/*Серверная часть написана на Node.js с использованием Express и базы данных MongoDB.*/}
        {/*Хранилище для БД предоставлено ресурсом <a href = 'https://mlab.com/'> mlab.com </a> а весь сайт лежит на Хероку.*/}
        <br/> Я не дизайнер, поэтому не судите строго. Но я постарался соответствовать современным тенденциям, сделать сайт удобным, минималистичным и информативным.
        <br/> Исходники сайта: <a href="https://github.com/ernestshelyag/react-portfolin-4.0">https://github.com/ernestshelyag/react-portfolin-4.0</a>
      </P>;
    return (
      <Container className = "wrp">
        <H1> Эрнест Шеляг </H1>
        <H2> Full-stack разработчик (Node.js) </H2>
        <P>
          Добро пожаловать на мой сайт-портфолио! Здесь Вы найдете информацию обо мне, а также сможете посмотреть мои работы и найти все необходимые ссылки.
          {/*<a href = "#"> мои работы </a>*/}
        </P>
        <Button onClick = { this.handleClick } >
          { this.state.isOpen ? "Скрыть" : "Об этом сайте" }
        </Button>
        <ReactCSSTransitionGroup
          transitionName="heroAboutText"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          { aboutSiteText }
        </ReactCSSTransitionGroup>
        <Scene/>
      </Container>
    )
  }
}

export default Hero;
