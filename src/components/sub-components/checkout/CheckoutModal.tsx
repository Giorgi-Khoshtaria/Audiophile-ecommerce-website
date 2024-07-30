import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { useCart } from "../cart/CartContext";
import ItemsForModal from "./ItemsForModal";
import { useNavigate } from "react-router-dom";

interface CheckoutModalProps {
  grandtotal: number;
  onClose: () => void;
}

function CheckoutModal({ grandtotal, onClose }: CheckoutModalProps) {
  const { cartItems, clearCart } = useCart();
  const [showAllItems, setShowAllItems] = useState(false);
  const navigate = useNavigate();

  const handleToggleItems = () => {
    setShowAllItems(!showAllItems);
  };

  const handleFinish = () => {
    clearCart();
    localStorage.removeItem("formValues");
    onClose();
    navigate("/home");
  };

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <div>
          <Logo
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle cx="32" cy="32" r="32" fill="#D87D4A" />
            <path
              d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
              stroke="white"
              strokeWidth="4"
            />
          </Logo>

          <Title>THANK YOU</Title>
          <Title>FOR YOUR ORDER</Title>

          <Text>You will receive an email confirmation shortly.</Text>
          <ItemsDiv>
            <Itemwrapper>
              <Items>
                {showAllItems
                  ? cartItems.map((item) => (
                      <ItemsForModal
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                      />
                    ))
                  : cartItems
                      .slice(0, 1)
                      .map((item) => (
                        <ItemsForModal
                          key={item.id}
                          img={item.img}
                          name={item.name}
                          price={item.price}
                          quantity={item.quantity}
                        />
                      ))}
              </Items>

              {cartItems.length > 1 && (
                <More onClick={handleToggleItems}>
                  {showAllItems
                    ? "View less"
                    : `and ${cartItems.length - 1} other item(s)`}
                </More>
              )}
            </Itemwrapper>
            <Grandtotal>
              <h3>GRAND TOTAL</h3>
              <p>${grandtotal.toFixed(0)}</p>
            </Grandtotal>
          </ItemsDiv>
          <Finish onClick={handleFinish}>BACK TO HOME</Finish>
        </div>
      </Container>
    </Overlay>
  );
}

export default CheckoutModal;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Container = styled.div`
  position: absolute;
  top: 20%;
  left: 30%;
  background-color: ${defaultTheme.colors.white};
  border-radius: 8px;
  padding: 48px;
`;

const Logo = styled.svg`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  margin-bottom: 33px;
`;

const Title = styled.h1`
  color: ${defaultTheme.colors.black};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 1.143px;
  text-transform: uppercase;
`;

const Text = styled.p`
  color: ${defaultTheme.colors.black};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
  margin-top: 24px;
  margin-bottom: 33px;
`;

const ItemsDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-bottom: 46px;
`;

const Itemwrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${defaultTheme.colors.flashwite};
  height: 100%;
`;
const Items = styled.div`
  min-height: 133px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;
const Grandtotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 41px 68px 41px 33px;
  background-color: ${defaultTheme.colors.black};
  background-size: 100%;
  h3 {
    color: ${defaultTheme.colors.white};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    opacity: 0.5;
  }
  p {
    color: ${defaultTheme.colors.white};
    text-align: left;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;

const Finish = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${defaultTheme.colors.white};
  background-color: ${defaultTheme.colors.peru};
  padding: 15px 0;
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border: 0;
  cursor: pointer;
`;

const More = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${defaultTheme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
  opacity: 0.5;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px 0 25px 0;
  cursor: pointer;
`;
