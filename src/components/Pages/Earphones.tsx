import React from "react";
import ProductsHero from "../sub-components/productsPage/ProductsHero";
import ProductSection from "../sub-components/productsPage/ProductSection";
import styled from "styled-components";
import data from "../../data.json";
import Navigation from "../sub-components/home/Navigation";
import MainBlog from "../sub-components/home/MainBlog";

function Earphones() {
  // Filter the data to get all products with category "headphones"
  const headphoneProducts = data.filter(
    (item) => item.category === "earphones"
  );
  console.log(headphoneProducts, "earphones");
  const productIndex = headphoneProducts[0];
  console.log(productIndex);
  return (
    <div>
      <ProductsHero text="EARPHONES" />
      <Content>
        <Wrapper>
          {headphoneProducts.length > 0 ? (
            headphoneProducts.map((item, index) => (
              <ProductSection
                key={item.id}
                img={item.image.desktop}
                imgtablet={item.image.tablet} // Assuming you want to use the desktop image
                name={item.name}
                description={item.description}
                index={index}
                id={item.id}
                category={item.category}
              />
            ))
          ) : (
            <div>No products available</div>
          )}
          <Navigation />
          <MainBlog />
        </Wrapper>
      </Content>
    </div>
  );
}

export default Earphones;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  // Add your desired styles here
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
