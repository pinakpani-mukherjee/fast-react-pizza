import { useNavigate } from "react-router-dom";
import CreateUser from "../features/user/CreateUser";
import { useAppSelector } from "../store/store";
import Button from "./Button";

const Home = () => {
  const username = useAppSelector((state) => state.user.username);
  const navigate = useNavigate();
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" isDisabled={false} to="/menu">
          Lets go to the Menu, {username}
        </Button>
      )}
    </div>
  );
};

export default Home;
