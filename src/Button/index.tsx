import React from "react";
import { calculateClass } from "./buttonHelper";
import "./styles/index.scss"

export type ButtonType = "default" | "primary" | "dashed" | "link" | "text";
export type ButtonShape = "default" | "circle" | "round";

interface ButtonProps {
  type?: ButtonType,
  shape?: ButtonShape,
  children?: React.ReactNode,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "default",
    shape = "default",
    children = null,
  } = props;
  
  return (
    <button
      className={calculateClass({type, shape})}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button;
