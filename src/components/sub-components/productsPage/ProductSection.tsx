import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

interface ProductSectionProps {
  img: string;
  imgtablet: string;
  name: string;
  description: string;
  index: number;
  id: number;
  category: string;
}

function ProductSection({
  img,
  imgtablet,
  name,
  description,
  index,
  id,
  category,
}: ProductSectionProps) {
  // Determine if index is odd or even
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isodd = index % 2 !== 0;
  const { phathName } = useParams();
  console.log(phathName);

  return (
    <InformationContainer isodd={`${isodd}`}>
      <MainImage>
        <MainImageDesktop src={img} alt="main-image" />
        <MainImagetablet src={imgtablet} alt="main-image" />
      </MainImage>
      <Info>
        {index === 0 && <Title>NEW PRODUCT</Title>}
        <ProductName>{name}</ProductName>
        <Description>{description}</Description>
        <Box>
          <AddCart to={`/${category}/${id}`}>SEE PRODUUCT</AddCart>
        </Box>
      </Info>
    </InformationContainer>
  );
}

export default ProductSection;

const InformationContainer = styled.div<{ isodd: string }>`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
  margin-bottom: 160px;
  padding: 0 20px;
  flex-direction: ${(props) =>
    props.isodd === "true" ? "row-reverse" : "row"};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const MainImage = styled.div`
  padding: 65px 95px 108px 95px;
  background-color: ${defaultTheme.colors.flashwite};
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 689px;
    height: 352px;
    flex-shrink: 0;
    padding: 0;
    border-radius: 8px;
  }
`;
const MainImageDesktop = styled.img`
  width: 349.238px;
  height: 386px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MainImagetablet = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 220px;
    height: 243px;
    flex-shrink: 0;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 52px;
  }
`;

const Title = styled.h2`
  color: ${defaultTheme.colors.peru};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const ProductName = styled.h1`
  color: ${defaultTheme.colors.black};
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 110% */
  letter-spacing: 1.429px;
  text-transform: uppercase;
  margin-bottom: 32px;
  width: 445px;
`;

const Description = styled.p`
  width: 445px;
  color: ${defaultTheme.colors.black};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
  margin-bottom: 32px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 50px;
`;

const AddCart = styled(Link)`
  color: ${defaultTheme.colors.white};
  background-color: ${defaultTheme.colors.peru};
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
  padding: 15px 30.5px 15px 34.5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${defaultTheme.colors.tangelo};
  }
`;
