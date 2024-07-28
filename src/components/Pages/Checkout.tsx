import styled from "styled-components";
import { defaultTheme } from "../utils/defaultTheme";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { useCart } from "../sub-components/cart/CartContext";
import Information from "../sub-components/checkout/Information";

// import CheckoutModal from "../sub-components/checkout/CheckoutModal";

function Checkout() {
  useEffect(() => {
    document.documentElement.style.setProperty("--background", "#F1F1F1");
  }, []);

  return (
    <Container>
      <Wrapper>
        <Goback to="/home">Go Back</Goback>
        <CheckoutContent>
          <Information />
          {/* <div>
            <Summary />
          </div> */}
        </CheckoutContent>
        {/* <CheckoutModal /> */}
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
  position: relative;
`;
const CheckoutContent = styled.div`
  width: 100%;
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
