import React, { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { useCart } from "../cart/CartContext";
import CheckoutItem from "./CheCkoutItem";
import CheckoutModal from "./CheckoutModal";

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMoneyNumber?: string;
  eMoneyPIN?: string;
}

interface SummaryProps {
  formValues: FormValues;
  isFormValid: () => boolean;
}

const Summary: React.FC<SummaryProps> = ({
  formValues,
  isFormValid,
}: SummaryProps) => {
  const { cartItems } = useCart();
  const [showModal, setShowModal] = useState(false);

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

  const handleShowModal = () => {
    if (isFormValid()) {
      setShowModal(true);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <SummeryContent>
      <h1>summary</h1>
      <ItemWrapper>
        {cartItems.map((item) => (
          <CheckoutItem
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ItemWrapper>
      <div>
        <UL>
          <Li>
            <LiText>TOTAL</LiText>
            <Span>${total}</Span>
          </Li>
          <Li>
            <LiText>SHIPPING</LiText>
            <Span>${shipping}</Span>
          </Li>
          <Li>
            <LiText>VAT (INCLUDED)</LiText>
            <Span>${vat.toFixed(0)}</Span>
          </Li>
        </UL>
        <Grandtotal>
          <p>GRAND TOTAL</p>
          <span>${grandTotal.toFixed(2)}</span>
        </Grandtotal>
      </div>
      <Contanue onClick={handleShowModal}>CONTINUE</Contanue>
      {showModal && (
        <CheckoutModal grandtotal={grandTotal} onClose={handleHideModal} />
      )}
    </SummeryContent>
  );
};

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

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const Contanue = styled.button`
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
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${defaultTheme.colors.gray};
  }
`;
