import { button } from "@/component/recipe/recipeTest.css";
import { FC } from "react";

type Props = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const RecipeTest: FC<Props> = ({
  variant = "primary",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={button({ variant, disabled })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default RecipeTest;
