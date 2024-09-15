import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import {
  getTotalCartNumber,
  getTotalCartSum,
} from "../../store/features/cartSlice";
import { formatCurrency } from "../../utilities/helpers";

const CartOverview = () => {
  const totalCartQuantity = useAppSelector(getTotalCartNumber);
  const totalCartSum = useAppSelector(getTotalCartSum);

  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 sm:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>${formatCurrency(totalCartSum)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
