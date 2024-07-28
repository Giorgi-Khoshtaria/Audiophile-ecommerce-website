// import React from "react";

import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
interface CartItemProps {
  img: string;
  name: string;
  price: number;
  quantity: number;
}

function CheCkoutItem({ img, name, price, quantity }: CartItemProps) {
  return (
    <div>
      <ItemContent>
        <ItemInfo>
          <ItemImage src={img} alt={name} />
          <div>
            <ItemName>{name}</ItemName>
            <ItemPrice>${price}</ItemPrice>
          </div>
        </ItemInfo>

        <Clicks>
          <p>x{quantity}</p>
        </Clicks>
      </ItemContent>
    </div>
  );
}

export default CheCkoutItem;

const Clicks = styled.div`
  width: 96px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

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
    text-align: center;
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

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0;
  img {
    width: 64px;
    height: 64px;
    margin-right: 16px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
`;

const ItemName = styled.p`
  color: ${defaultTheme.colors.black};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
`;

const ItemPrice = styled.p`
  color: ${defaultTheme.colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 178.571% */
  opacity: 0.5;
`;
