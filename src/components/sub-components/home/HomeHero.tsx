import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { defaultTheme } from "../../utils/defaultTheme";
import hero from "../../../../public/assets/home/desktop/hero.png";

function HomeHero() {
  return (
    <Container>
      <Wrapper>
        <Information>
          <h2>NEW PRODUCT</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/headphones">See Product</Link>
        </Information>
        {/* <HeroImg></HeroImg> */}
        <Img src={hero} alt="" />
      </Wrapper>
    </Container>
  );
}

export default HomeHero;

const Container = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 98px;
  background-color: ${defaultTheme.colors.chineseblack};
  padding: 0 20px;
`;

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* position: relative; */
`;

const Information = styled.div`
  /* position: absolute; */
  h2 {
    color: ${defaultTheme.colors.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
    opacity: 0.4964;
  }
  h1 {
    width: 396px;
    color: ${defaultTheme.colors.white};
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px; /* 103.571% */
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 24px 0;
  }
  p {
    width: 349px;
    color: ${defaultTheme.colors.white};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    opacity: 0.75;
    margin-bottom: 40px;
  }
  a {
    padding: 15px 29.5px 15px 31.5px;
    background-color: ${defaultTheme.colors.peru};
    color: ${defaultTheme.colors.white};
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const Img = styled.img``;
// const HeroImg = styled.div`
//   background: url(${hero}) lightgray 0px 0px / 100% 100% no-repeat;
//   width: 540px; /* Adjust the width and height as needed */
//   height: 560px;
// `;
