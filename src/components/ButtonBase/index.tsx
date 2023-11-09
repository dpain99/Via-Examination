import React from "react";
import "./style.css";

interface IButtonBaseProps {
  label?: string;
  type?: "submit" | "button" | "reset";
  style?: React.CSSProperties;
  styleLabel?: React.CSSProperties;
  icon?: any;
  onClick?: any;
  disabled?: boolean;
}
const ButtonBase = ({
  label,
  type,
  style,
  styleLabel,
  icon,
  onClick,
  disabled,
}: IButtonBaseProps) => {
  return (
    <button
      className={`btn-base ${disabled ? "disabled" : ""}`}
      type={type}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{icon}</span>
      <span className="p2-semi-bold" style={styleLabel}>
        {label}
      </span>
    </button>
  );
};

export default ButtonBase;
