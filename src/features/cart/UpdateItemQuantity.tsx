import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../../store/features/cartSlice";
import { useAppDispatch } from "../../store/store";
import Button from "../../ui/Button";

interface updateItemQuantityProps {
  updateId: string;
  currentQuantity: number;
}

const UpdateItemQuantity = ({
  updateId,
  currentQuantity,
}: updateItemQuantityProps) => {
  const dispatch = useAppDispatch();
  const handleDecrementQuantity = () => {
    dispatch(decreaseItemQuantity({ id: updateId }));
  };
  const handleIncrementQuantity = () => {
    dispatch(increaseItemQuantity({ id: updateId }));
  };
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" isDisabled={false} onClick={handleDecrementQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" isDisabled={false} onClick={handleIncrementQuantity}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
