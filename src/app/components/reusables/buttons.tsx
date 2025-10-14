import React from "react";

interface ButtonType {
  text: string;
  type: "reset" | "submit" | "button";
  className: string;
  onClick?: () => void;
}

export default function Button({ text, type, className, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={text}
      className={className}
    >
      {text}
    </button>
  );
}
