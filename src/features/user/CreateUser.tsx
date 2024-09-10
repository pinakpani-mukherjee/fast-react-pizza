import { useState } from "react";
import Button from "../../ui/Button";
import { useAppDispatch } from "../../store/store";
import { updateName } from "../../store/features/userSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName({ name: username }));
    navigate("/menu");
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="md: mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary" isDisabled={false}>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
};

export default CreateUser;
