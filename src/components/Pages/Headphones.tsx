import React from "react";
import ProductsHero from "../sub-components/productsPage/ProductsHero";
import ProductSection from "../sub-components/productsPage/ProductSection";
import styled from "styled-components";
import data from "../../data.json";
import Navigation from "../sub-components/home/Navigation";
import MainBlog from "../sub-components/home/MainBlog";
import { useEffect } from "react";

function Headphones() {
  // Filter the data to get all products with category "headphones"
  const headphoneProducts = data.filter(
    (item) => item.category === "headphones"
  );
  console.log(headphoneProducts, "headphones");
  const productIndex = headphoneProducts[0];
  console.log(productIndex);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <ProductsHero text="HEADPHONES" />
      <Content>
        <Wrapper>
          {headphoneProducts.length > 0 ? (
            headphoneProducts.map((item, index) => (
              <ProductSection
                key={item.id}
                img={item.image.desktop} // Assuming you want to use the desktop image
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

export default Headphones;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // Add your desired styles here
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
