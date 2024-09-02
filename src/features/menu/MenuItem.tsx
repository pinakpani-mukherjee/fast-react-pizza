import { formatCurrency } from "../../utilities/helpers";

interface MenuProp {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: [string];
  soldOut: boolean;
  imageUrl: string;
}

const MenuItem = ({
  id,
  name,
  unitPrice,
  ingredients,
  soldOut,
  imageUrl,
}: MenuProp) => {
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
