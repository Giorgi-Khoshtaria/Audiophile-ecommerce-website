import { useState } from "react";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import { useCart } from "./CartContext";

interface CartItemProps {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

function CartItem({ id, img, name, price, quantity }: CartItemProps) {
  const { updateQuantity } = useCart();
  const [count, setCount] = useState(quantity);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateQuantity(id, newCount);
  };

  const decreaseCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateQuantity(id, newCount);
    }
  };

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
          <button onClick={increaseCount}>+</button>
          <p>{count}</p>
          <button onClick={decreaseCount}>-</button>
        </Clicks>
      </ItemContent>
    </div>
  );
}

export default CartItem;

const Clicks = styled.div`
  width: 96px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 7px 11px;
  background-color: ${defaultTheme.colors.flashwite};
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
