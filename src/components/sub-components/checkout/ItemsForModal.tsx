import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
interface ItemsForModalProps {
  img: string;
  name: string;
  price: number;
  quantity: number;
}
function ItemsForModal({ img, name, price, quantity }: ItemsForModalProps) {
  return (
    <Conatiner>
      <ItemContent>
        <ItemInfo>
          <ItemImage src={img} alt={name} />
          <div>
            <ItemName>{name}</ItemName>
            <ItemPrice>${price}</ItemPrice>
          </div>
        </ItemInfo>

        <Quantity>x{quantity}</Quantity>
      </ItemContent>
    </Conatiner>
  );
}

export default ItemsForModal;
const Conatiner = styled.div`
  /* width: 198px; */
  background-color: ${defaultTheme.colors.flashwite};
  /* border-radius: 8px; */
`;
const ItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 24px 25px 24px;
  gap: 30px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

const ItemImage = styled.img`
  width: 28px;
  height: 32px;
  flex-shrink: 0;
  margin-right: 27px;
`;

const ItemName = styled.p`
  width: 100px;
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
const Quantity = styled.p`
  color: ${defaultTheme.colors.black};
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
