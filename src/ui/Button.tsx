import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface buttonProps {
  children: ReactNode;
  isDisabled: boolean;
  to?: string;
  type: string;
  onClick?: () => void;
}

const base =
  "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm ";

const styles: { [key: string]: string } = {
  primary: base + "px-4 py-3 md:px-6 md:py-4",
  small: base + "py-2 px-4 md:px-5 md:py-5 text-xs",
  round: base + "py-1 px-2.5 md:px-3.5 md:py-2 text-xs",
  secondary:
    "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
};

const Button = ({ children, isDisabled, to, type, onClick }: buttonProps) => {
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} disabled={isDisabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={isDisabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
