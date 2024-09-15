import {
  addItem,
  getCurrentQuantityById,
} from "../../store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { cartItem } from "../cart/CartItem";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

interface MenuItemProp {
  pizza: Pizza;
}
export interface Pizza {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: [string];
  soldOut: boolean;
  imageUrl: string;
}

const MenuItem = ({
  pizza: { id, name, unitPrice, ingredients, soldOut, imageUrl },
}: MenuItemProp) => {
  const dispatch = useAppDispatch();
  const currentQuantity = useAppSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  const handleAddToCart = () => {
    const newPizzaCartItem = {
      id: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    } as cartItem;
    dispatch(addItem({ pizza: newPizzaCartItem }));
  };
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              {" "}
              <UpdateItemQuantity
                updateId={id}
                currentQuantity={currentQuantity}
              />{" "}
              <DeleteItem deleteId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" isDisabled={soldOut} onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
