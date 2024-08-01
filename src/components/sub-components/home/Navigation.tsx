import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { Link } from "react-router-dom";
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import { useEffect } from "react";
function Navigation() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Image src={headphones} alt="" />
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
                strokeWidth="2"
              />
            </svg>
          </Link>
        </Info>
      </Wrapper>
      <Wrapper>
        <Image src={speakers} alt="" />
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
                strokeWidth="2"
              />
            </svg>
          </Link>
        </Info>
      </Wrapper>
      <Wrapper>
        <Image src={earphones} alt="" />
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
                strokeWidth="2"
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
  gap: 10px;
  @media (max-width: 1440px) {
    width: auto;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 68px;
  }

  /* padding: 0 20px; */
`;
const Wrapper = styled.div`
  width: 350px;
  height: 204px;
  background-color: ${defaultTheme.colors.flashwite};
  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: column;
  @media (max-width: 1440px) {
    width: 223px;
    height: 165px;
    flex-shrink: 0;
  }
  @media (max-width: 768px) {
    width: 327px;
    height: 165px;
    flex-shrink: 0;
  }
`;
const Image = styled.img`
  transform: translateY(-70px);
  width: 122.947px;
  height: 160px;
  flex-shrink: 0;
  object-fit: cover;
  @media (max-width: 1440px) {
    width: 79.916px;
    height: 104px;
    flex-shrink: 0;
    transform: translateY(-50px);
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
    @media (max-width: 1440px) {
      font-size: 15px;
    }
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
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${defaultTheme.colors.peru};
    }
  }
`;
