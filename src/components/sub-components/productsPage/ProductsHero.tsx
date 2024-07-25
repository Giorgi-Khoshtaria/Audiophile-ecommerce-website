import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";

interface ProductsHeroProps {
  text: string;
}

function ProductsHero({ text }: ProductsHeroProps) {
  return (
    <Container>
      <div>
        <h1>{text}</h1>
      </div>
    </Container>
  );
}

export default ProductsHero;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors.chineseblack};
  padding: 98px 20px;
  margin-bottom: 160px;
  h1 {
    color: ${defaultTheme.colors.white};
    text-align: center;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; /* 110% */
    letter-spacing: 1.429px;
    text-transform: uppercase;
  }
`;
