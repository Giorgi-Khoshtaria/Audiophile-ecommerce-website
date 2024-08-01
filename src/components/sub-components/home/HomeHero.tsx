import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { defaultTheme } from "../../utils/defaultTheme";
import hero from "/assets/home/desktop/hero.png";
import herotablet from "/assets/home/tablet/image-header.jpg";
import heromobile from "/assets/home/mobile/image-header.jpg"; // Updated path
import data from "../../../data.json";

function HomeHero() {
  const product = data[2];
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
          <StyledLink to={`/${product.category}/${product.id}`}>
            See Product
          </StyledLink>
        </Information>

        <Img src={hero} alt="homepagehero" />
        <Imagetablet src={herotablet} alt="homepagehero" />
        <ImageMobile src={heromobile} alt="homepagehero" />
      </Wrapper>
    </Container>
  );
}

export default HomeHero;

const Container = styled.div`
  width: calc(100% + 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors.chineseblack};
  margin-bottom: 120px;
`;

const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1440px) {
    width: 100%;
    flex-direction: column;
    position: relative;
  }
`;

const Information = styled.div`
  @media (max-width: 1440px) {
    position: absolute;
    top: 126px;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    color: ${defaultTheme.colors.white};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 10px;
    text-transform: uppercase;
    opacity: 0.4964;
  }
  h1 {
    width: 396px;
    color: ${defaultTheme.colors.white};
    font-size: 56px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 24px 0;
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  p {
    width: 349px;
    color: ${defaultTheme.colors.white};
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.75;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      width: 328px;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 15px 30px;
  background-color: ${defaultTheme.colors.peru};
  color: ${defaultTheme.colors.white};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${defaultTheme.colors.tangelo};
  }
`;

const Img = styled.img`
  @media (max-width: 1440px) {
    display: none;
  }
`;
const Imagetablet = styled.img`
  display: none;
  @media (max-width: 1440px) {
    display: flex;
    height: 729px;
    /* width: 100%; */
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const ImageMobile = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    height: 600px;
    /* width: 100%; */
  }
`;
