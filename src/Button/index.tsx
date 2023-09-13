import React from "react";
import { calculateClass } from "./buttonHelper";
import "./styles/index.scss"

export type ButtonType = "default" | "primary" | "dashed" | "link" | "text";
export type ButtonShape = "default" | "circle" | "round";
export type ButtonSize = "large" | "middle" | "small";

interface ButtonProps {
  type?: ButtonType,
  shape?: ButtonShape,
  size?: ButtonSize,
  children?: React.ReactNode,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "default",
    shape = "default",
    size = "middle",
    children = null,
  } = props;
  
  return (
    <button
      className={calculateClass({type, shape, size})}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button;
