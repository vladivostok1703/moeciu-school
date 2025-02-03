import React, { ReactNode } from "react";

// Tipurile pentru ButtonProps
interface ButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  asChild?: boolean;
  children?: ReactNode; // Permite utilizarea children
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  asChild = false,
  children,
}) => {
  if (asChild && children) {
    // Verificăm dacă children este un element React care acceptă onClick
    const child = children as React.ReactElement<any>; // Utilizăm tipul any pentru a permite aplicarea onClick

    // Aplica onClick doar dacă children este un element React valid
    return React.cloneElement(child, {
      onClick, // Se adaugă handlerul onClick
      className: `bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`,
    });
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
