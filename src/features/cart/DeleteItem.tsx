import { deleteItem } from "../../store/features/cartSlice";
import { useAppDispatch } from "../../store/store";
import Button from "../../ui/Button";

interface deleteItemProps {
  deleteId: string;
}

const DeleteItem = ({ deleteId }: deleteItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      type="small"
      isDisabled={false}
      onClick={() => dispatch(deleteItem({ id: deleteId }))}
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
