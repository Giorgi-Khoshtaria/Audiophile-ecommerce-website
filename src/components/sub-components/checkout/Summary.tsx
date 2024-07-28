import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { useCart } from "../cart/CartContext";
import CheCkoutItem from "./CheCkoutItem";

interface Summeryprops {
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
}
function Summary({ total, shipping, vat, grandTotal }: Summeryprops) {
  const { cartItems } = useCart();

  return (
    <SummeryContent>
      <h1>summary</h1>
      <div>
        {cartItems.map((item) => (
          <CheCkoutItem
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div>
        <UL>
          <Li>
            <LiText>TOTAL</LiText>
            <Span>${total.toFixed(2)}</Span>
          </Li>
          <Li>
            <LiText>SHIPPING</LiText>
            <Span>${shipping.toFixed(2)}</Span>
          </Li>
          <Li>
            <LiText>VAT (INCLUDED)</LiText>
            <Span>${vat.toFixed(2)}</Span>
          </Li>
        </UL>
        <Grandtotal>
          <p>GRAND TOTAL</p>
          <span>${grandTotal.toFixed(2)}</span>
        </Grandtotal>
      </div>
      <Contanue href="">CONTINUE</Contanue>
    </SummeryContent>
  );
}

export default Summary;

const SummeryContent = styled.div`
  background-color: ${defaultTheme.colors.white};
  padding: 32px 33px 32px 33px;

  h1 {
    color: ${defaultTheme.colors.black};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.286px;
    text-transform: uppercase;
  }
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  gap: 8px;
`;

const LiText = styled.p`
  color: ${defaultTheme.colors.black};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;

const Span = styled.span`
  color: ${defaultTheme.colors.black};
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

const Grandtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  p {
    color: ${defaultTheme.colors.black};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }
  span {
    color: ${defaultTheme.colors.tangelo};
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;

const Contanue = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  color: ${defaultTheme.colors.white};
  background-color: ${defaultTheme.colors.peru};
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 54px 15px 59px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${defaultTheme.colors.gray};
  }
`;
