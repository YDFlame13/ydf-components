import classnames from "classnames";

import { btnClsPrefix } from "../../constant/classPrefix"

import type { 
  ButtonType, 
  ButtonShape, 
  ButtonSize, 
  ButtonDisabled,
  ButtonBlock,
  ButtonDanger,
  ButtonGhost,
  ButtonClassNames,
} from ".";

interface cClsProps {
  type: ButtonType,
  shape: ButtonShape,
  size: ButtonSize,
  disabled: ButtonDisabled,
  block: ButtonBlock,
  danger: ButtonDanger,
  ghost: ButtonGhost,
  classNames?: ButtonClassNames,
}

const btnClsDisabled = "disabled";
const btnClsBlock = "block";
const btnClsDanger = "danger";
const btnClsGhost = "ghost";

export const calculateClass = ({
  type,
  shape,
  size,
  disabled,
  block,
  danger,
  ghost,
  classNames,
}: cClsProps):string => {
  const defaultClass = btnClsPrefix;
  const classes = [defaultClass];
  if(type !== "default"){
    classes.push(`${btnClsPrefix}-${type}`);
  }
  if(shape !== "default"){
    classes.push(`${btnClsPrefix}-${shape}`);
  }
  if(size !== "middle"){
    classes.push(`${btnClsPrefix}-${size}`);
  }
  if(disabled){
    classes.push(`${btnClsPrefix}-${btnClsDisabled}`);
  }
  if(block){
    classes.push(`${btnClsPrefix}-${btnClsBlock}`);
  }
  if(danger){
    classes.push(`${btnClsPrefix}-${type}-${btnClsDanger}`)
  }
  if(ghost){
    classes.push(`${btnClsPrefix}-${btnClsGhost}`)
  }
  return classnames(classes, classNames);
}