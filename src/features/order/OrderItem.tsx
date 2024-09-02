import { formatCurrency } from "../../utilities/helpers";

interface ItemProp {
  quantity: number;
  name: string;
  totalPrice: number;
}
interface OrderItemProp {
  item: ItemProp;
  isLoadingIngredients: boolean;
  ingredients: [string];
}

const OrderItem = ({
  item: { quantity, name, totalPrice },
  isLoadingIngredients,
  ingredients,
}: OrderItemProp) => {
  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;
