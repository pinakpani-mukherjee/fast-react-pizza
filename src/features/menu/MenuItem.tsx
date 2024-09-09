import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

interface MenuItemProp {
  pizza: Pizza;
}
export interface Pizza {
  pizzaId: string;
  name: string;
  unitPrice: number;
  ingredients: [string];
  soldOut: boolean;
  imageUrl: string;
}

const MenuItem = ({
  pizza: { pizzaId, name, unitPrice, ingredients, soldOut, imageUrl },
}: MenuItemProp) => {
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
          <Button type="small" isDisabled={soldOut}>
            Add to cart
          </Button>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
