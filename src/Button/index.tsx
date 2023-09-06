import React from "react";
import { calculateClass } from "./buttonHelper";
import "./index.scss"

export type ButtonType = "primary" | "dashed" | "link" | "text" | "default" ;
export type ButtonShape = "default" | "circle" | "round";

interface ButtonProps {
  type?: ButtonType,
  shape: ButtonShape,
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
