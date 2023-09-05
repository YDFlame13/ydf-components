import React from "react";
import { calculateClass } from "./buttonHelper";

export type ButtonType = "primary" | "dashed" | "link" | "text" | "default" ;

interface ButtonProps {
  type?: ButtonType,
  children?: React.ReactNode,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "default",
    children = null,
  } = props;
  console.log(props);
  
  return (
    <button
      className={calculateClass(type)}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button;
