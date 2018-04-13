import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components'
import Scene from './Scene.jsx'

// - - - - - styles

const H1 = styled.h1`
  color: #49C5B6;
  font-size: 60px;
  margin: -5vh 0 20px;
`;
const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 40px;
`;
const P = styled.p`max-width: 40vw;`;

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
        Это небольшой сайт сделан мной на React при помощи create-react-app. В этом сайте я в первый раз частично попробовал подход "CSS in JS" с использованием библиотеки styled-components.
        {/*Серверная часть написана на Node.js с использованием Express и базы данных MongoDB.*/}
        {/*Хранилище для БД предоставлено ресурсом <a href = 'https://mlab.com/'> mlab.com </a> а весь сайт лежит на Хероку.*/}
        <br/> Я не дизайнер, поэтому не судите строго. Но я постарался соответствовать современным тенденциям, сделать сайт удобным, минималистичным и информативным.
        <br/> Исходники сайта: <a href="https://github.com/ernestshelyag/react-portfolin-4.0">https://github.com/ernestshelyag/react-portfolin-4.0</a>
      </P>;
    return (
      <Container className = "wrp">
        <H1> Эрнест Шеляг </H1>
        <H2> Full-stack разработчик (Node.js) </H2>
        <P>
          Здравствуйте и добро пожаловать на мой сайт-портфолио. Здесь Вы найдете всю информацию обо мне. Сможете посмотреть мои работы и найти все необходимые ссылки.
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
