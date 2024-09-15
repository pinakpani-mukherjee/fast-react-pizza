import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem, { cartItem } from "./CartItem";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { clearCart, getCart } from "../../store/features/cartSlice";
import { getUser } from "../../store/features/userSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cart = useAppSelector(getCart);
  const username = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item: cartItem) => (
          <CartItem cartPizza={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" isDisabled={false} to="/order/new">
          Order pizzas
        </Button>
        <Button
          type="secondary"
          onClick={() => dispatch(clearCart())}
          isDisabled={false}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
