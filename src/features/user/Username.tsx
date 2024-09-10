import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/store";

const Username = () => {
  const username = useAppSelector((state) => state.user.username);

  return (
    <div className="test-semibold hidden text-sm md:block">{username}</div>
  );
};

export default Username;
