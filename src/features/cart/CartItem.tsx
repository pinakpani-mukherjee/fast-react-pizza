import { formatCurrency } from "../../utilities/helpers";
interface PizzaProp {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
}

const CartItem = ({ pizzaId, name, quantity, totalPrice }: PizzaProp) => {
  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItem;
