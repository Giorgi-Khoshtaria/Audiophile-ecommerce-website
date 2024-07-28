import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";

function Information() {
  const [showCheck, setShowCheck] = useState("Emoney");

  const handleShowcheck = (method: React.SetStateAction<string>) => {
    setShowCheck(method);
  };
  return (
    <Informations>
      <h1>CHECKOUT</h1>
      <Billing>
        <h2>Billing Details</h2>
        <div>
          <Details>
            <FlexForInputs>
              <Label htmlFor="">Name</Label>
              <Input type="text" placeholder="Alexei Ward" />
            </FlexForInputs>
            <FlexForInputs>
              <Label htmlFor="">Email Address</Label>
              <Input type="email" name="" id="" placeholder="alexei@mail.com" />
            </FlexForInputs>
          </Details>
          <FlexForInputs>
            <Label htmlFor="">Phone Number</Label>
            <Input type="number" placeholder="+1 202-555-0136" />
          </FlexForInputs>
        </div>
      </Billing>
      <ShipingInfo>
        <h2>shipping info</h2>
        <div>
          <Adress>
            <Label htmlFor="">Address</Label>
            <AdressInput type="text" placeholder="1137 Williams Avenue" />
          </Adress>
          <Details>
            <FlexForInputs>
              <Label htmlFor="">ZIP Code</Label>
              <Input type="number" placeholder="10001" />
            </FlexForInputs>
            <FlexForInputs>
              <Label htmlFor="">City</Label>
              <Input type="text" name="" id="" placeholder="CityNew York" />
            </FlexForInputs>
          </Details>
          <FlexForInputs>
            <Label htmlFor="">Country</Label>
            <Input type="text" placeholder="United States" />
          </FlexForInputs>
        </div>
      </ShipingInfo>
      <div>
        <h2>payment details</h2>
        <PaymentDetails>
          <Label htmlFor="">Payment Method</Label>
          <PaymentDiv>
            <PaymentMethod
              isSelected={showCheck === "Emoney"}
              onClick={() => handleShowcheck("Emoney")}
            >
              <CheckDiv>
                {showCheck === "Emoney" ? <Checkbox /> : null}
              </CheckDiv>
              <PaymentLabel htmlFor="">e-Money</PaymentLabel>
            </PaymentMethod>
            <PaymentMethod
              isSelected={showCheck === "Cash"}
              onClick={() => handleShowcheck("Cash")}
            >
              <CheckDiv>{showCheck === "Cash" ? <Checkbox /> : null}</CheckDiv>
              <PaymentLabel htmlFor="">Cash on Delivery</PaymentLabel>
            </PaymentMethod>
          </PaymentDiv>
        </PaymentDetails>
        {showCheck === "Emoney" && (
          <EmoneyMethods>
            <FlexForInputs>
              <Label htmlFor="">e-Money Number</Label>
              <Input type="number" name="" id="" placeholder="238521993" />
            </FlexForInputs>
            <FlexForInputs>
              <Label htmlFor="">e-Money PIN</Label>
              <Input type="number" placeholder="6891" />
            </FlexForInputs>
          </EmoneyMethods>
        )}
        {showCheck === "Cash" && (
          <CashPayment>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95372 33.8438 10.3125C33.5874 10.6708 33.3033 11.0674 32.9712 11.5322C32.3815 12.4005 31.6345 13.453 30.7088 14.6218C29.5063 16.1677 30.5752 18.5625 32.4375 18.5625C35.6196 18.5625 37.4997 15.0528 35.4365 12.6181C35.4496 12.5916 35.4621 12.5653 35.4742 12.5391L38.625 7.03125H21.1875V8.4375ZM13.9688 18.375H10.6562V31.1625C12.4124 30.6347 14.4312 30.6262 16.1875 31.1375V18.375H13.9688ZM16.9688 39.5625C16.1946 39.5625 15.5625 38.9317 15.5625 38.1562C15.5625 37.3808 16.1946 36.75 16.9688 36.75H20.0938C20.8682 36.75 21.5 37.3808 21.5 38.1562C21.5 38.9317 20.8682 39.5625 20.0938 39.5625H16.9688ZM31.8438 25.3125V40.1562H29.625V25.3125H31.8438ZM41.5938 23.9062V11.25H34.9688C34.965 11.2526 34.9612 11.2553 34.9574 11.2579C34.3783 11.6402 33.7166 11.9953 32.9926 12.3158C34.0484 13.3961 34.5781 14.8526 34.5781 16.5C34.5781 17.9956 34.1837 19.3968 33.4816 20.5938H43.6875V23.9062H41.5938Z"
                fill="#D87D4A"
              />
            </svg>
            <p>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </CashPayment>
        )}
      </div>
    </Informations>
  );
}

export default Information;
const Informations = styled.div`
  width: 100%;
  padding: 54px 48px 48px 48px;
  background-color: ${defaultTheme.colors.white};
  margin-bottom: 141px;
  border-radius: 8px;

  h1 {
    color: ${defaultTheme.colors.black};
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 112.5% */
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-bottom: 41px;
  }
  h2 {
    color: ${defaultTheme.colors.peru};
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 0.929px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
`;
const Billing = styled.div`
  margin-bottom: 53px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const FlexForInputs = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  color: ${defaultTheme.colors.black};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
  margin-bottom: 9px;
`;

const Input = styled.input`
  width: 309px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  background-color: ${defaultTheme.colors.white};
  padding-left: 24px;
  color: ${defaultTheme.colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;

  /* padding-left: 24px; */
  &::placeholder {
    color: ${defaultTheme.colors.black};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    /* padding-left: 8px; */
    opacity: 0.4;
  }
  &:focus {
    outline: none;
    border: 2px solid ${defaultTheme.colors.peru};
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const Adress = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
const AdressInput = styled.input`
  height: 56px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  background-color: ${defaultTheme.colors.white};
  padding-left: 24px;
  color: ${defaultTheme.colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;

  &::placeholder {
    color: ${defaultTheme.colors.black};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    /* padding-left: 8px; */
    opacity: 0.4;
  }
  &:focus {
    outline: none;
    border: 2px solid ${defaultTheme.colors.peru};
  }
`;
const ShipingInfo = styled.div`
  margin-bottom: 61px;
`;

const PaymentDetails = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
`;
const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const PaymentMethod = styled.div<{ isSelected: boolean }>`
  width: 309px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#D87D4A" : "#ccc")};
  cursor: pointer;
  &:hover {
    border-color: #d87d4a;
  }
`;
const PaymentLabel = styled.label`
  color: ${defaultTheme.colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

const EmoneyMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;
const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  /* padding: 5px; */
  border-radius: 50%;
  border: 1px solid #cfcfcf;
  margin: 0 16px;
  cursor: pointer;
`;
const Checkbox = styled.div`
  width: 10px;
  height: 10px;
  flex-shrink: 0;

  background-color: ${defaultTheme.colors.peru};
  border-radius: 50%;
  /* padding: 5px; */
`;

const CashPayment = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 30px;
  svg {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
  p {
    color: #000;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    opacity: 0.5;
  }
`;
