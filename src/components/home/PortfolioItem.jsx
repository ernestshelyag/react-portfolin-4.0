import React from 'react';
import styled from 'styled-components'

// - - - - - styles

const Container = styled.div`
  height: 50vh;
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Wrp = styled.div`
  border: solid 1px #49C5B6;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  margin: 5px;
  padding: 5px;
  position: relative;
  & > *.PortfolioItem__Absolute {
    position: absolute;
    left: 5px;
    top: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
  &:hover .PortfolioItem__Img {
    filter: blur(5px);
  };
  &:hover .PortfolioItem__ImgShadow {
    opacity: 1;
  };
  &:hover .PortfolioItem__TextBlock {
    opacity: 1;
  };
`;
const Img = styled.img`
  z-index: 1;
  filter: blur(0px);
  transition: filter 1s ease;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const ImgBlock = styled.div`overflow: hidden`;
const ImgShadow = styled.span`
  z-index: 2;
  background: rgba(34,82,71,0.51);
  opacity: 0;
  transition: opacity 1s ease;
`;
const TextBlock = styled.div`
  z-index: 3;
  color: #fff;
  opacity: 0;
  transition: opacity 1s ease;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  & a:after {
    display: none;
  }
`;

const H2 = styled.h2`
  padding: 0;
  font-size: 30px;
`;
const H3 = styled.h3`
  font-size: 20px;
  padding: 0;
`;
const SiteLink = styled.a`
  color: #333;
  background: #fff;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: bold;
`;
const GithubLink = styled.a`
  color: #333;
  background: #49C5B6;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: bold;
  margin-top: 6px;
`;
const Help = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;
const P = styled.p`
  @media (max-width: 700px) {
    display: none;
  }
`;

// - - - - - styles end

function PortfolioItem (props) {
  const {content} = props;
  return (
    <Container>
      <Wrp>
        <ImgBlock className = "PortfolioItem__Absolute" >
          <Img src = { content.img } className = "PortfolioItem__Img" />
        </ImgBlock>
        <ImgShadow className = "PortfolioItem__ImgShadow PortfolioItem__Absolute" ></ImgShadow>
        <TextBlock className = "PortfolioItem__TextBlock PortfolioItem__Absolute" >
          <H2> { content.num } </H2>
          <H3> { content.title } </H3>
          <P> { content.text } </P>
          <SiteLink href = { content.link } > { content.link } </SiteLink>
          <GithubLink href = { content.github } > Github исходники </GithubLink>
          <Help>
            Для перехода на данный сайт кликните по первой ссылке,
            <br/>
            также Вы можете посмотреть исходники на Гитхабе.
          </Help>
        </TextBlock>
      </Wrp>
    </Container>
  )
}

export default PortfolioItem;
