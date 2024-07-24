import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { Link } from "react-router-dom";
import headphones from "../../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "../../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "../../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";

function Navigation() {
  return (
    <Container>
      <Wrapper>
        <img src={headphones} alt="" />
        <Info>
          <h2>HEADPHONES</h2>
          <Link to="/headphones">
            Shop{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.3219 1L6.3219 6L1.3219 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </Link>
        </Info>
      </Wrapper>
      <Wrapper>
        <img src={speakers} alt="" />
        <Info>
          <h2>SPEAKERS</h2>
          <Link to="/speakers">
            Shop{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.3219 1L6.3219 6L1.3219 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </Link>
        </Info>
      </Wrapper>
      <Wrapper>
        <img src={earphones} alt="" />
        <Info>
          <h2>EARPHONES</h2>
          <Link to="/earphones">
            Shop{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
            >
              <path
                d="M1.3219 1L6.3219 6L1.3219 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </Link>
        </Info>
      </Wrapper>
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 168px;
`;
const Wrapper = styled.div`
  width: 350px;
  height: 204px;
  background-color: ${defaultTheme.colors.flashwite};
  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: column;
  img {
    transform: translateY(-70px);
    width: 122.947px;
    height: 160px;
    flex-shrink: 0;
    object-fit: cover;
  }
`;

const Info = styled.div`
  text-align: center;
  transform: translateY(-50px);
  h2 {
    color: ${defaultTheme.colors.black};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  a {
    color: ${defaultTheme.colors.black};
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.5;
    text-decoration: none;
  }
`;
