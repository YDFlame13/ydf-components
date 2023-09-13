import classNames from "classnames";

import { btnClsPrefix } from "../../constant/classPrefix"

import type { ButtonType, ButtonShape, ButtonSize } from ".";

interface cClsProps {
  type: ButtonType,
  shape: ButtonShape,
  size: ButtonSize,
}

export const calculateClass = ({
  type,
  shape,
  size,
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
    classes.push(`${btnClsPrefix}-${size}`)
  }
  return classNames(classes);
}