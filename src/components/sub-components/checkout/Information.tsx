import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import Summary from "./Summary";

function Information() {
  const [showCheck, setShowCheck] = useState("Emoney");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  useEffect(() => {
    const savedFormValues = localStorage.getItem("formValues");
    if (savedFormValues) {
      setFormValues(JSON.parse(savedFormValues));
    }
  }, []);

  const handleShowcheck = (method: React.SetStateAction<string>) => {
    setShowCheck(method);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFormValues = { ...formValues, [name]: value };
    setFormValues(updatedFormValues);
    localStorage.setItem("formValues", JSON.stringify(updatedFormValues));
  };

  const isFormValid = () => {
    const requiredFields =
      showCheck === "Emoney"
        ? [
            "name",
            "email",
            "phoneNumber",
            "address",
            "zipCode",
            "city",
            "country",
            "eMoneyNumber",
            "eMoneyPIN",
          ]
        : [
            "name",
            "email",
            "phoneNumber",
            "address",
            "zipCode",
            "city",
            "country",
          ];
    return requiredFields.every(
      (field) => formValues[field as keyof typeof formValues]
    );
  };

  return (
    <CheckoutContent>
      <Informations>
        <h1>CHECKOUT</h1>
        <Billing>
          <h2>Billing Details</h2>
          <div>
            <Details>
              <FlexForInputs>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Alexei Ward"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                />
              </FlexForInputs>
              <FlexForInputs>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="alexei@mail.com"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </FlexForInputs>
            </Details>
            <FlexForInputs>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                type="number"
                name="phoneNumber"
                placeholder="+1 202-555-0136"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </FlexForInputs>
          </div>
        </Billing>
        <ShipingInfo>
          <h2>shipping info</h2>
          <div>
            <Adress>
              <Label htmlFor="address">Address</Label>
              <AdressInput
                type="text"
                name="address"
                placeholder="1137 Williams Avenue"
                value={formValues.address}
                onChange={handleInputChange}
                required
              />
            </Adress>
            <Details>
              <FlexForInputs>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  type="number"
                  name="zipCode"
                  placeholder="10001"
                  value={formValues.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </FlexForInputs>
              <FlexForInputs>
                <Label htmlFor="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="New York"
                  value={formValues.city}
                  onChange={handleInputChange}
                  required
                />
              </FlexForInputs>
            </Details>
            <FlexForInputs>
              <Label htmlFor="country">Country</Label>
              <Input
                type="text"
                name="country"
                placeholder="United States"
                value={formValues.country}
                onChange={handleInputChange}
                required
              />
            </FlexForInputs>
          </div>
        </ShipingInfo>
        <div>
          <h2>payment details</h2>
          <PaymentDetails>
            <Label htmlFor="">Payment Method</Label>
            <PaymentDiv>
              <PaymentMethod
                isselected={`${showCheck} === "Emoney"`}
                onClick={() => handleShowcheck("Emoney")}
              >
                <CheckDiv>
                  {showCheck === "Emoney" ? <Checkbox /> : null}
                </CheckDiv>
                <PaymentLabel htmlFor="">e-Money</PaymentLabel>
              </PaymentMethod>
              <PaymentMethod
                isselected={`${showCheck} === "Cash"`}
                onClick={() => handleShowcheck("Cash")}
              >
                <CheckDiv>
                  {showCheck === "Cash" ? <Checkbox /> : null}
                </CheckDiv>
                <PaymentLabel htmlFor="">Cash on Delivery</PaymentLabel>
              </PaymentMethod>
            </PaymentDiv>
          </PaymentDetails>
          {showCheck === "Emoney" && (
            <EmoneyMethods>
              <FlexForInputs>
                <Label htmlFor="eMoneyNumber">e-Money Number</Label>
                <Input
                  type="number"
                  name="eMoneyNumber"
                  placeholder="238521993"
                  value={formValues.eMoneyNumber}
                  onChange={handleInputChange}
                  required
                />
              </FlexForInputs>
              <FlexForInputs>
                <Label htmlFor="eMoneyPIN">e-Money PIN</Label>
                <Input
                  type="number"
                  name="eMoneyPIN"
                  placeholder="6891"
                  value={formValues.eMoneyPIN}
                  onChange={handleInputChange}
                  required
                />
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
                {/* SVG path */}
              </svg>
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </CashPayment>
          )}
        </div>
      </Informations>
      <div>
        <Summary formValues={formValues} isFormValid={isFormValid} />
      </div>
    </CheckoutContent>
  );
}

export default Information;
const CheckoutContent = styled.div`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-between;
  gap: 30px;
`;
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
const PaymentMethod = styled.div<{ isselected: string }>`
  width: 309px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid
    ${({ isselected }) => (isselected === "true" ? "#D87D4A" : "#ccc")};
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
// const Error = styled.span`
//   color: red;
//   font-size: 12px;
//   margin-top: 5px;
// `;
