import React from "react";
import classnames from "classnames";
import { calculateClass } from "./buttonHelper";
import "./styles/index.scss"

export type ButtonType = "default" | "primary" | "dashed" | "link" | "text";
export type ButtonShape = "default" | "circle" | "round";
export type ButtonSize = "large" | "middle" | "small";
export type ButtonDisabled = boolean;
export type ButtonBlock = boolean;
export type ButtonDanger = boolean;
export type ButtonGhost = boolean;
export type ButtonClassNames = classnames.Argument;

interface ButtonProps {
  type?: ButtonType,
  shape?: ButtonShape,
  size?: ButtonSize,
  disabled?: ButtonDisabled,
  block?: ButtonBlock,
  danger?: ButtonDanger,
  ghost?: ButtonGhost,
  classNames?: ButtonClassNames,
  children?: React.ReactNode,
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = "default",
    shape = "default",
    size = "middle",
    disabled = false,
    block = false,
    danger = false,
    ghost = false,
    classNames,
    children = null,
  } = props;
  
  return (
    <button
      className={calculateClass({type, shape, size, disabled, block, danger, ghost, classNames})}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
