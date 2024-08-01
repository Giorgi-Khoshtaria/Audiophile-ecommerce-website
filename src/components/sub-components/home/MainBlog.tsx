import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import mainblog from "/assets/shared/desktop/image-best-gear.jpg";
import mainblogtablet from "/assets/shared/tablet/image-best-gear.jpg";
import mainblogmobile from "/assets/shared/mobile/image-best-gear.jpg";

function MainBlog() {
  return (
    <Container>
      <Information>
        <h1>
          Bringing you the <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </Information>
      <Image src={mainblog} alt="mainblog" />
      <Imagetablet src={mainblogtablet} alt="mainblog" />
      <Imagemobile src={mainblogmobile} alt="mainblog" />
    </Container>
  );
}

export default MainBlog;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 200px;
  @media (max-width: 1440px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 96px;
  }
  /* padding: 0 20px; */
`;

const Information = styled.div`
  width: 445px;

  @media (max-width: 1440px) {
    width: 573px;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 327px;
  }
  h1 {
    color: ${defaultTheme.colors.black};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    letter-spacing: 1.429px;
    text-transform: uppercase;
    margin-bottom: 32px;
    span {
      color: ${defaultTheme.colors.peru};
    }
  }
  p {
    color: ${defaultTheme.colors.black};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }
`;

const Image = styled.img`
  width: 540px;
  height: 588px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
  @media (max-width: 1440px) {
    display: none;
  }
`;
const Imagetablet = styled.img`
  display: none;
  @media (max-width: 1440px) {
    border-radius: 8px;
    display: flex;
    width: 689px;
    height: 300px;
    flex-shrink: 0;
    margin-bottom: 63px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Imagemobile = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    border-radius: 8px;
    display: flex;
    width: 327px;
    height: 300px;
    flex-shrink: 0;
    margin-bottom: 63px;
  }
`;
