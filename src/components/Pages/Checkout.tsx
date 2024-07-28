import styled from "styled-components";
import { defaultTheme } from "../utils/defaultTheme";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../sub-components/cart/CartContext";
import Information from "../sub-components/checkout/Information";
import Summary from "../sub-components/checkout/Summary";

function Checkout() {
  useEffect(() => {
    document.documentElement.style.setProperty("--background", "#F1F1F1");
  }, []);

  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const total = calculateTotal();

  const calculateShipping = () => {
    if (total < 5000) return 50;
    if (total >= 5000 && total <= 10000) return 200;
    if (total > 10000) return 500;
    return 0; // Fallback value
  };

  const shipping = calculateShipping();

  const vat = total * 0.2; // Assuming VAT is 20%
  const grandTotal = total + shipping + vat;

  return (
    <Container>
      <Wrapper>
        <Goback to="/home">Go Back</Goback>
        <CheckoutContent>
          <Information />
          <Summary
            total={total || 0}
            shipping={shipping || 0}
            vat={vat || 0}
            grandTotal={grandTotal || 0}
          />
        </CheckoutContent>
      </Wrapper>
    </Container>
  );
}

export default Checkout;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1440px;
`;
const CheckoutContent = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  gap: 30px;
`;
const Goback = styled(Link)`
  display: inline-block;
  color: ${defaultTheme.colors.black};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
  text-decoration: none;
  margin-top: 79px;
  margin-bottom: 38px;
  transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
    color: ${defaultTheme.colors.peru};
  }
`;
