import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";

function ModalNavigations() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
                strokeWidth="2"
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
                strokeWidth="2"
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
                strokeWidth="2"
              />
            </svg>
          </Link>
        </Info>
      </Wrapper>
    </Container>
  );
}

export default ModalNavigations;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 78px;
  }

  /* padding: 0 20px; */
`;
const Wrapper = styled.div`
  width: 223px;
  height: 165px;
  background-color: ${defaultTheme.colors.flashwite};
  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: column;
  img {
    transform: translateY(-70px);
    width: 79.916px;
    height: 104px;
    flex-shrink: 0;
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
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${defaultTheme.colors.peru};
    }
  }
`;
