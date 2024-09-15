import { getCurrentQuantityById } from "../../store/features/cartSlice";
import { useAppSelector } from "../../store/store";
import { formatCurrency } from "../../utilities/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

interface cartItemProp {
  cartPizza: cartItem;
}
export interface cartItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

const CartItem = ({
  cartPizza: { id, name, quantity, totalPrice },
}: cartItemProp) => {
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity updateId={id} currentQuantity={currentQuantity} />
        <DeleteItem deleteId={id} />
      </div>
    </li>
  );
};

export default CartItem;
