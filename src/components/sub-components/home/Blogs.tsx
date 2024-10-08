import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { Link } from "react-router-dom";
import patern from "/assets/home/desktop/pattern-circles.svg";
import blog1img from "/assets/home/desktop/image-speaker-zx9.png";
import blog2img from "/assets/home/desktop/image-speaker-zx7.jpg";
import blog3img from "/assets/home/desktop/image-earphones-yx1.jpg";
import blog2imgtablet from "/assets/home/tablet/image-speaker-zx7.jpg";
import blog2imgmobile from "/assets/home/mobile/image-speaker-zx7.jpg";
import blog3imgtablet from "/assets/home/tablet/image-earphones-yx1.jpg";
import blog3imgmobile from "/assets/home/mobile/image-earphones-yx1.jpg";
import data from "../../../data.json";

function Blogs() {
  console.log(data);
  const firstItem = data[4];
  const secondItem = data[5];
  const thirdItem = data[0];
  console.log(thirdItem.id);
  return (
    <Container>
      <BlogOne>
        <BlogoneImg src={blog1img} alt="blog1" />
        <BlogOneInfos>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={`/speakers/${firstItem.id}`}>See Product</Link>
        </BlogOneInfos>
      </BlogOne>
      <BlogTwo>
        <h1>ZX7 SPEAKER</h1>
        <Link to={`/speakers/${secondItem.id}`}>See Product</Link>
      </BlogTwo>
      <BlogThree>
        <BlogThreeImg src={blog3img} alt="blog 3" />
        <BlogThreeImgtablet src={blog3imgtablet} alt="blog3" />
        <BlogThreeImgMobile src={blog3imgmobile} alt="blog3" />
        <BlogThreeInfo>
          <h1>YX1 EARPHONES</h1>
          <Link to={`/earphones/${thirdItem.id}`}>See Product</Link>
        </BlogThreeInfo>
      </BlogThree>
    </Container>
  );
}

export default Blogs;
const Container = styled.div`
  margin-bottom: 200px;
  width: 100%;
`;

const BlogOne = styled.div`
  border-radius: 8px;
  background: #d87d4a;
  background-image: url(${patern});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 95px 95px 0 114px;
  margin-bottom: 48px;
  overflow: hidden;
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 52px 0 64px 0;
    text-align: center;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 55px 77px 55px 77px;
  }

  a {
    padding: 15px 29.5px 15px 31.5px;
    background-color: ${defaultTheme.colors.black};
    color: ${defaultTheme.colors.white};
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: ${defaultTheme.colors.gray};
    }
  }
`;
const BlogOneInfos = styled.div`
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    width: 261px;
    color: ${defaultTheme.colors.white};
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px; /* 103.571% */
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 24px;
    @media (max-width: 768px) {
      font-size: 36px;
    }
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
    @media (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;
const BlogoneImg = styled.img`
  transform: translateY(15px);
  width: 410.234px;
  height: 493px;
  flex-shrink: 0;

  @media (max-width: 1440px) {
    width: 197.212px;
    height: 237px;
    flex-shrink: 0;
    transform: translateY(0);
    margin-bottom: 64px;
  }
  @media (max-width: 768px) {
    width: 172.248px;
    height: 207px;
    flex-shrink: 0;
    margin-bottom: 32px;
  }
`;

const BlogTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${blog2img});
  padding: 101px 0 153px 96.5px;
  margin-bottom: 50px;
  @media (max-width: 1440px) {
    background-image: url(${blog2imgtablet});
  }
  @media (max-width: 768px) {
    background-image: url(${blog2imgmobile});
  }
  h1 {
    color: ${defaultTheme.colors.black};
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 48px;
    flex-shrink: 0;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: transparent;
    color: ${defaultTheme.colors.black};
    border: 1px solid ${defaultTheme.colors.black};
    text-decoration: none;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    &:hover {
      background-color: ${defaultTheme.colors.black};
      color: ${defaultTheme.colors.white};
    }
  }
`;

const BlogThree = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1440px) {
    gap: 11px;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const BlogThreeImg = styled.img`
  border-radius: 8px;
  @media (max-width: 1440px) {
    display: none;
  }
`;
const BlogThreeImgtablet = styled.img`
  display: none;
  @media (max-width: 1440px) {
    width: 339px;
    height: 320px;
    flex-shrink: 0;
    display: flex;
    border-radius: 8px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const BlogThreeImgMobile = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 200px;
    flex-shrink: 0;
  }
`;
const BlogThreeInfo = styled.div`
  padding: 101px 200px 101px 96.5px;
  background-color: ${defaultTheme.colors.flashwite};
  border-radius: 8px;
  @media (max-width: 1440px) {
    padding: 101px 53px 101px 41px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 41px 58px 41px 25.5px;
  }

  h1 {
    color: ${defaultTheme.colors.black};
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media (max-width: 1440px) {
      font-size: 26px;
    }
  }
  a {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 48px;
    flex-shrink: 0;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: transparent;
    color: ${defaultTheme.colors.black};
    border: 1px solid ${defaultTheme.colors.black};
    text-decoration: none;
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
    &:hover {
      background-color: ${defaultTheme.colors.black};
      color: ${defaultTheme.colors.white};
    }
  }
`;
