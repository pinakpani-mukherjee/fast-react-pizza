import { formatCurrency } from "../../utilities/helpers";

export interface ItemProp {
  quantity: number;
  name: string;
  totalPrice: number;
}
export interface OrderItemProp {
  item: ItemProp;
  //isLoadingIngredients: boolean;
  //ingredients: [string];
}

const OrderItem = ({
  item: { quantity, name, totalPrice },
  //isLoadingIngredients,
  //ingredients,
}: OrderItemProp) => {
  return (
    <li className="py-3">
      <div className="items flex justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;
