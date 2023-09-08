import classNames from "classnames";

import { btnClsPrefix } from "../../constant/classPrefix"

import type { ButtonType } from ".";
import type { ButtonShape } from ".";

interface cClsProps {
  type: ButtonType,
  shape: ButtonShape,
}

export const calculateClass = ({
  type,
  shape,
}: cClsProps):string => {
  const defaultClass = btnClsPrefix;
  const classes = [defaultClass];
  if(type !== "default"){
    classes.push(`${btnClsPrefix}-${type}`);
  }
  if(shape !== "default"){
    classes.push(`${btnClsPrefix}-${shape}`);
  }
  return classNames(classes);
}