import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../utils/defaultTheme";
import cart from "/assets/shared/desktop/icon-cart.svg";
import CartItem from "./cart/CartItem";
import { useCart } from "./cart/CartContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navigation: string[] = ["home", "headphones", "speakers", "earphones"];

function Header() {
  const { clearCart, cartItems } = useCart();
  const itemNumber = cartItems.length;
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = () => {
    setShow(!show);
  };

  const handleCheckout = () => {
    if (itemNumber === 0) {
      alert(
        "Your cart is empty. Add items to the cart before proceeding to checkout."
      );
      return; // Do not navigate if the cart is empty
    }
    setShow(false); // Close the modal
    navigate("/checkout"); // Navigate to the checkout page
  };

  useEffect(() => {
    const calculatedTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, [cartItems]);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo>
            <Link to="/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="143"
                height="25"
                viewBox="0 0 143 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.9755 4.10884V0H53.2131V4.10884H57.9755ZM41.8721 20.3997C43.5076 20.3997 44.9648 19.8429 46.1074 18.8803L46.5635 19.9241H50.1425V0.792094L45.3611 0.792093V6.38308C44.3548 5.75732 43.1686 5.40721 41.8721 5.40721C37.5634 5.40721 34.4943 8.52769 34.4943 12.896C34.4943 17.2644 37.5634 20.3997 41.8721 20.3997ZM7.36265 20.3849C8.99354 20.3849 10.4497 19.8476 11.5995 18.9152L12.0137 19.9093H15.7527V5.85311L12.1479 5.85285L11.6531 6.93986C10.4936 5.98222 9.01642 5.42934 7.36265 5.42934C3.06909 5.42934 0 8.52769 0 12.8809C0 17.2493 3.06909 20.3849 7.36265 20.3849ZM8.00933 16.098C6.19773 16.098 4.86614 14.7278 4.86614 12.8921C4.86614 11.0677 6.18681 9.69748 8.00933 9.69748C9.82094 9.69748 11.1525 11.0677 11.1525 12.8921C11.1525 14.7278 9.82094 16.098 8.00933 16.098ZM32.4542 13.8899C32.4542 17.823 29.6916 20.3849 25.544 20.3849C21.396 20.3849 18.6184 17.823 18.6184 13.8899V5.86794H23.4549V13.6793C23.4549 15.163 24.2516 16.0355 25.544 16.0355C26.836 16.0355 27.6177 15.1482 27.6177 13.6793V5.86794H32.4542V13.8899ZM39.3758 12.8963C39.3758 14.7317 40.7074 16.1128 42.519 16.1128C44.3306 16.1128 45.6622 14.7317 45.6622 12.8963C45.6622 11.0607 44.3306 9.67952 42.519 9.67952C40.7074 9.67952 39.3758 11.0607 39.3758 12.8963ZM58.0127 5.86768V19.9239H53.1762V5.86768H58.0127ZM68.1095 20.3849C72.6727 20.3849 75.9821 17.2384 75.9821 12.896C75.9821 8.53888 72.6727 5.40747 68.1095 5.40747C63.5315 5.40747 60.237 8.53888 60.237 12.896C60.237 17.2384 63.5315 20.3849 68.1095 20.3849ZM65.0812 12.8963C65.0812 14.7546 66.346 16.0355 68.1095 16.0358C69.873 16.0358 71.1378 14.7548 71.1378 12.8966C71.1378 11.0492 69.873 9.75709 68.1095 9.75709C66.346 9.75709 65.0812 11.038 65.0812 12.8963ZM82.9978 25V19.4663C83.9888 20.0655 85.1511 20.3997 86.4208 20.3997C90.7144 20.3997 93.7835 17.2753 93.7835 12.896C93.7835 8.51676 90.7144 5.40721 86.4208 5.40721C84.7523 5.40721 83.2662 5.98508 82.1114 6.98463L81.5056 5.86794H78.2165V25H82.9978ZM82.6307 12.8958C82.6307 14.7424 83.9623 16.1126 85.7739 16.1126C87.5743 16.1126 88.9171 14.7424 88.9171 12.8958C88.9171 11.0492 87.5855 9.679 85.7739 9.679C83.9623 9.679 82.6307 11.0492 82.6307 12.8958ZM100.839 19.9241V12.4181C100.839 10.6143 101.751 9.57462 103.215 9.57462C104.477 9.57462 105.046 10.4011 105.046 12.0222V19.9241H109.882V11.4597C109.882 7.81629 107.811 5.45225 104.587 5.45225C103.188 5.45225 101.873 5.95931 100.839 6.79279V0.792093H96.0023V19.9241H100.839ZM117.574 0V4.10884H112.811V0H117.574ZM117.611 5.86768H112.774V19.9239H117.611V5.86768ZM125.489 0.792093V19.9241H120.653V0.792093H125.489ZM135.34 20.3851C138.863 20.3851 141.704 18.3808 142.692 15.1729H137.879C137.414 15.9957 136.47 16.4911 135.34 16.4911C133.813 16.4911 132.79 15.6573 132.474 14.045H142.9C142.963 13.6103 143 13.1868 143 12.7633C143 8.63988 139.866 5.40747 135.34 5.40747C130.933 5.40747 127.714 8.57611 127.714 12.8854C127.714 17.1795 130.959 20.3851 135.34 20.3851ZM132.559 11.3639H138.236C137.811 9.95908 136.8 9.20109 135.34 9.20109C133.931 9.20109 132.951 9.96767 132.559 11.3639Z"
                  fill="white"
                />
              </svg>
            </Link>
          </Logo>
          <nav>
            <Ul>
              {navigation.map((nav) => {
                return (
                  <Li key={nav}>
                    <Link to={nav}>{nav}</Link>
                  </Li>
                );
              })}
            </Ul>
          </nav>
          <Cart>
            <CartImage src={cart} alt="Cart" onClick={handleShowModal} />
            {show ? (
              <div>
                <Overllay onClick={handleShowModal}></Overllay>
                <CartModal>
                  <ModalHeader>
                    <p>cart ({itemNumber})</p>
                    <a onClick={clearCart}>Remove all</a>
                  </ModalHeader>
                  <div>
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        id={item.id}
                      />
                    ))}
                  </div>
                  <Total>
                    <p>total</p>
                    <span>${total}</span>
                  </Total>
                  <Checkout>
                    <a onClick={handleCheckout}>Checkout</a>
                  </Checkout>
                </CartModal>
              </div>
            ) : (
              ""
            )}
          </Cart>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors.chineseblack};
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px 20px;
  background-color: ${defaultTheme.colors.chineseblack};
  border-bottom: 1px solid ${defaultTheme.colors.gray};
  z-index: 10;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 143px;
  height: 25px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const Li = styled.li`
  list-style-type: none;

  a {
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 2px;
    font-family: ${defaultTheme.fonts.monrope};
    color: ${defaultTheme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${defaultTheme.colors.peru};
    }
  }
`;

const Cart = styled.div`
  cursor: pointer;
  position: relative;
`;
const CartImage = styled.img`
  width: 24px;
  height: 24px;
`;

const CartModal = styled.div`
  z-index: 1111;
  position: absolute;
  right: 100px;
  top: 80px;
  background-color: ${defaultTheme.colors.white};
  border-radius: 8px;
  padding: 32px;
  width: 377px;
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  p {
    color: ${defaultTheme.colors.black};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }
  span {
    text-align: center;
    color: ${defaultTheme.colors.black};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;
const Checkout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    width: 100%;
    text-align: center;
    color: ${defaultTheme.colors.white};
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: ${defaultTheme.colors.peru};
    padding: 15px 60px 15px 65px;
    border: 0;
    text-decoration: none;
  }
`;
const Overllay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
