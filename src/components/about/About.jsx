import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// - - - - - styles

const Red = styled.span`
  color: #cd0000;
`;
const Blue = styled.span`
  color: #49C5B6;
`;
const TitleBlock = styled.div`
  text-align: center;
  & > h2 {
    font-weight: bold;
  }
`;
const SkillBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
  & > li {
    width: 33%;
    @media (max-width: 700px) {
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;
const SkillItem = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > li {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
  }
`;
const SkillTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: underline;
`;
const SoftList = styled.ul`
  list-style-type: square;
  margin-left: 15px;
  & li {
    margin-bottom: 3px;
  }
`;

// - - - - - styles end

function About(){
  return (
    <div className = "wrp" style = {{ paddingBottom: '100px' }}>
      <h1> Обо мне </h1>
      <p>
        Начинал я свою профессиональную деятельность в качестве верстальщика, прошёл долгий путь от простого HTML и CSS до написания SPA на React и построения API на Node.js с использованием Express, MongoDB и прочих технологий. Несмотря на знание серверного node.js, я являюсь больше frontend-разработчиком, хотя эта грань между frontend и backend со временем все сильнее стирается. Это было лирическое отступление, а теперь голые факты.
      </p>
      <TitleBlock>
        <h2> Знания и используемые технологий </h2>
        <span><Blue>Основным</Blue> цветом выделенны предпочнения, <Red>красным</Red> - технологии, которые стараюсь не использовать или знаю очень поверхностно.</span>
      </TitleBlock>
      <div>
        <SkillBlock>
          <li>
            <SkillTitle>Frontend</SkillTitle>
            <SkillItem>
              <li>HTML5</li>
              <li>CSS3</li>
              <li><Blue>Sass</Blue>, <Red>Less</Red>, Stylus</li>
              <li><Blue>Gulp</Blue>, Webpack</li>
              <li>React</li>
              <li>Redux</li>
              <li>WebGl (three.js)</li>
              <li>BEM</li>
              <li><Red>Vue.js</Red></li>
              <li><Red>Bootstrap</Red></li>
              <li><Red>jQuery</Red></li>
            </SkillItem>
          </li>
          <li>
            <SkillTitle>Frontend & Backend</SkillTitle>
            <SkillItem>
              <li>JS (ES5, <Blue>ES6</Blue>)</li>
              <li>Node.js</li>
              <li>Pug</li>
              <li>Git</li>
              <li>NPM, <Blue>Yarn</Blue></li>
              <li>Eslint</li>
            </SkillItem>
          </li>
          <li>
            <SkillTitle>Backend</SkillTitle>
            <SkillItem>
              <li><Blue>Express</Blue>, Koa.js</li>
              <li><Blue>MongoDB</Blue>, <Red>PostgreSQL</Red></li>
              <li>REST API</li>
              <li>Websockets (Socket.io)</li>
              <li><Red>Nginx</Red></li>
              <li><Red>PHP</Red></li>
              <li>Wordpress</li>
            </SkillItem>
          </li>
        </SkillBlock>
      </div>

      <h2> Используемые программы </h2>
      <SoftList>
        <li>Photoshop, <Blue>Zeplin</Blue></li>
        <li><Red>Illustrator</Red></li>
        <li><Blue>PhpStorm</Blue>, SublimeText3</li>
        <li>Postman</li>
        <li>Studio 3T (MongoDB)</li>
      </SoftList>
      {/*<More/>*/}
      <p>
        Помимо всего прочего, меня привлекают многие другие вещи: к примеру, Blender3D, Pyton, Assembler; различные интересные подходы в веб-разработке (CSS In JS, AtomicCSS и пр.).
      </p>
      <p>
        Я, по большей части, самоучка, но недавно окончил курс "Node.js: серверный JavaScript" в <a href="https://loftschool.com">LoftSchool</a>, где получил много навыков и опыта, за что им очень благодарен. Но, в основном, все знания я черпаю из профессиональных книг и официальных документаций.
      </p>
      <span>
        Перейти на страницу <Link to = '/contacts'> Контакты </Link>.
      </span>
    </div>
  )
}

export default About;

{/*<ul>*/}
  {/*<li>практикую 3д</li>*/}
  {/*<li>слепая печать</li>*/}
  {/*<li>говорю по англ</li>*/}
  {/*<li>использую хтмл5 и теги</li>*/}
  {/*<li>юх и юай</li>*/}
  {/*<li>быть на волне посещаю конференции</li>*/}
{/*</ul>*/}
