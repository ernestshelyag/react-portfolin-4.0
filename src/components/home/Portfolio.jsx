import React from 'react'
import styled from 'styled-components'
import PortfolioItem from './PortfolioItem.jsx'
import { Link } from 'react-router-dom'
import content from '../../db'

// - - - - - styles

const Container = styled.section`
  background: #F3F3F3;
  padding-bottom: 100px;
`;
const PortfolioBlock = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;
const H2 = styled.h2`
  font-size: 25px;
  padding-bottom: 10px;
`;
const UL = styled.h2`
  list-style: square;
  margin: 0 0 40px 5px;
  color: #49C5B6;
  & a {
    color: #333;
    &:after {
      display: none;
    }
    &:hover {
      color: #49C5B6;
    }
  }
`;

// - - - - - styles end

function Portfolio () {
  return (
    <Container>
      <div className = "wrp">
        <h1> Портфолио </h1>
        <p>
          Любой свой код через 2 месяца кажется ужасным. Но именно опыт и ошибки помогают развиваться. Здесь представленны почти все мои работы в хронологическом порядке. Как вы уже понимаете я не считаю их идеальными. Но для меня самое главное - видеть прогресс.
        </p>
        <PortfolioBlock>
          <PortfolioItem content = { content[0] } />
          <PortfolioItem content = { content[1] } />
          <PortfolioItem content = { content[2] } />
          <PortfolioItem content = { content[3] } />
          <PortfolioItem content = { content[4] } />
          <PortfolioItem content = { content[5] } />
          <PortfolioItem content = { content[6] } />
        </PortfolioBlock>
        <H2>Другие работы:</H2>
        <UL>
          <li><a href="https://ernestshelyag.github.io/logo/logo.html">3D Логотип компании Индинс для главной страницы сайта.</a></li>
          <li><a href="https://shelyageric.000webhostapp.com/index">Старое тестовое задание. Переход между страницами с помощью Ajax + PHP.</a></li>
          <li><a href="https://ernestshelyag.github.io/app/index.html">Черновик моего прошлого сайта-портфолио. (мне не понравился, решил все переделать)</a></li>
        </UL>
        <p>
          Все эти работы - фронтенд. Бекенд начал изучать относительно недавно. К сожалению пока нет ни одного готового сайта на React, кроме сайта, на котором Вы сейчас находитесь.
          <br/>
          Если у вас возникли какие-то вопросы или предложения, Вы можете связаться со мной в разделе <Link to = '/contacts'> Контакты </Link> любым удобным для Вас способом.
          <br/>
          Чтобы узнать больше информации обо мне - перейдите на следующую страницу<Link to = '/about'> по этой ссылке </Link>.
        </p>
      </div>
    </Container>
  )
}

export default Portfolio;
