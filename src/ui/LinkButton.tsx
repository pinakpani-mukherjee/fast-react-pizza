import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

interface linkButtonProps {
  children: ReactNode;
  to: string;
}

const LinkButton = ({ children, to }: linkButtonProps) => {
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );
  return (
    <Link
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      to={to}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
