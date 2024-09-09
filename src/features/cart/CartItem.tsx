import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

interface cartItemProp {
  cartPizza: cartItem;
}
interface cartItem {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
}

const CartItem = ({
  cartPizza: { pizzaId, name, quantity, totalPrice },
}: cartItemProp) => {
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" isDisabled={false}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
