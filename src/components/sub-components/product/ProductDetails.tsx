import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../../data.json";
import { defaultTheme } from "../../utils/defaultTheme";
import Navigation from "../home/Navigation";
import MainBlog from "../home/MainBlog";
import { useCart } from "../cart/CartContext";

function ProductDetails() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { addToCart, cartItems, updateQuantity } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!id) {
    return <div>Invalid Product ID</div>;
  }

  const productId = parseInt(id, 10);
  const product = data.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const includes = product.includes;
  const others = product.others;

  const isItemInCart = cartItems.some(
    (cartItem) => cartItem.id === product.id.toString()
  );

  const handleOrder = () => {
    if (isItemInCart) {
      alert("This item is already in your cart. The quantity will be updated.");
      updateQuantity(product.id.toString(), count);
    } else {
      const cartItem = {
        id: product.id.toString(),
        name: product.name,
        img: product.image.desktop,
        price: product.price,
        quantity: count,
      };
      addToCart(cartItem);
    }
  };

  const handleIncreaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (isItemInCart) {
      updateQuantity(product.id.toString(), newCount);
    }
  };

  const handleDecreaseCount = () => {
    const newCount = count > 1 ? count - 1 : 1;
    setCount(newCount);
    if (isItemInCart) {
      updateQuantity(product.id.toString(), newCount);
    }
  };

  const handleProductNavigation = (slug: string) => {
    const selectedProduct = data.find((item) => item.slug === slug);
    if (selectedProduct) {
      navigate(`/${selectedProduct.category}/${selectedProduct.id}`);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <Container>
      <div>
        <Goback to="/home"> Go Back</Goback>
        <Information>
          <MainImage>
            <img src={product.image.desktop} alt="" />
          </MainImage>
          <div>
            <Title>NEW PRODUCT</Title>
            <ProductName>{product.name}</ProductName>
            <Description>{product.description}</Description>
            <Price>${product.price}</Price>
            <Box>
              <Clicks>
                <button onClick={handleIncreaseCount}>+</button>
                <p>{count}</p>
                <button onClick={handleDecreaseCount}>-</button>
              </Clicks>
              <AddCart onClick={handleOrder}>ADD TO CART</AddCart>
            </Box>
          </div>
        </Information>
        <Fearures>
          <div>
            <h1>FEATURES</h1>
            <FeaturesText>{product.features}</FeaturesText>
          </div>
          <div>
            <h1>In the Box</h1>
            <UL>
              {includes.map((item, index) => (
                <Li key={index}>
                  <p>{item.quantity}x</p>
                  <span>{item.item}</span>
                </Li>
              ))}
            </UL>
          </div>
        </Fearures>
        <Gallery>
          <FirsSecond>
            <img src={product.gallery.first.desktop} alt="" />
            <img src={product.gallery.second.desktop} alt="" />
          </FirsSecond>
          <ThirdImage src={product.gallery.third.desktop} alt="" />
        </Gallery>
        <Others>
          <h1>You may also like</h1>
          <OthersUl>
            {others.map((other, index) => (
              <OthersLi key={index}>
                <img src={other.image.desktop} alt={other.name} />
                <p>{other.name}</p>
                <OthersLink
                  to="#"
                  onClick={() => handleProductNavigation(other.slug)}
                >
                  See Product
                </OthersLink>
              </OthersLi>
            ))}
          </OthersUl>
        </Others>
        <Navigation />
        <MainBlog />
      </div>
    </Container>
  );
}

export default ProductDetails;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 79px;
`;

const Information = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
  margin-bottom: 160px;
  padding: 0 20px;
`;

const Goback = styled(Link)`
  color: ${defaultTheme.colors.black};
  text-decoration: none;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
  padding: 0 20px;
`;

const MainImage = styled.div`
  padding: 65px 95px 108px 95px;
  background-color: ${defaultTheme.colors.flashwite};
  img {
    width: 349.238px;
    height: 386px;
    flex-shrink: 0;
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

const Price = styled.p`
  color: ${defaultTheme.colors.black};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 50px;
`;

const Clicks = styled.div`
  width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background-color: ${defaultTheme.colors.flashwite};
  margin-right: 16px;
  cursor: pointer;
  p {
    color: ${defaultTheme.colors.black};
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  button {
    color: ${defaultTheme.colors.black};
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.25;
    border: 0;

    &:hover {
      color: ${defaultTheme.colors.peru};
    }
  }
`;

const AddCart = styled.button`
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
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${defaultTheme.colors.tangelo};
  }
`;
const Fearures = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 160px;
  h1 {
    color: ${defaultTheme.colors.black};
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
`;

const FeaturesText = styled.p`
  width: 635px;
  color: ${defaultTheme.colors.black};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  p {
    color: ${defaultTheme.colors.peru};
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 166.667% */
    margin-right: 21px;
  }
  span {
    color: ${defaultTheme.colors.black};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }
`;

const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 0 20px;
  margin-bottom: 160px;
`;
const FirsSecond = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  img {
    width: 445px;
    height: 280px;
  }
`;

const ThirdImage = styled.img`
  width: 635px;
  height: 592px;
`;
const Others = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 160px;
  h1 {
    color: ${defaultTheme.colors.black};
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-bottom: 64px;
  }
`;

const OthersUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;
const OthersLi = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 350px;
    height: 318px;
    flex-shrink: 0;
  }
  p {
    color: ${defaultTheme.colors.black};
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.714px;
    text-transform: uppercase;
    margin-top: 40px;
    margin-bottom: 32px;
  }
`;
const OthersLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 48px;
  flex-shrink: 0;
  color: ${defaultTheme.colors.white};
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* padding: 15px 29.5px 15px 31%.5px; */
  background-color: ${defaultTheme.colors.peru};
  text-decoration: none;
`;
