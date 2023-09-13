import classNames from "classnames";

import { btnClsPrefix } from "../../constant/classPrefix"

import type { 
  ButtonType, 
  ButtonShape, 
  ButtonSize, 
  ButtonDisabled,
  ButtonBlock
} from ".";

interface cClsProps {
  type: ButtonType,
  shape: ButtonShape,
  size: ButtonSize,
  disabled: ButtonDisabled,
  block: ButtonBlock,
}

const btnClsDisabled = "disabled";
const btnClsBlock = "block";

export const calculateClass = ({
  type,
  shape,
  size,
  disabled,
  block,
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
  return classNames(classes);
}