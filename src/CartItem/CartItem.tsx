import Button from "@material-ui/core/Button";
import { FunctionComponent } from "react";

import { CartItemType } from "../App";

import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  deleteFromCart: (id: number) => void;
};

const CartItem: FunctionComponent<Props> = ({
  item,
  addToCart,
  deleteFromCart,
}) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>가격: ${item.price}</p>
        <p>총 가격:${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => deleteFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
