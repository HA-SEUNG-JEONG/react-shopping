import CartItem from "../CartItem/CartItem";

import { Wrapper } from "./Cart.styles";

import { CartItemType } from "../App";
import { FunctionComponent } from "react";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  deleteFromCart: (id: number) => void;
};

const Cart: FunctionComponent<Props> = ({
  cartItems,
  addToCart,
  deleteFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>쇼핑 목록</h2>
      {cartItems.length === 0 ? <p>장바구니에 상품이 없습니다.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
        />
      ))}
      <h2>총 가격:${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
