import classNames from "classnames";

import { btnClsPrefix } from "../../constant/classPrefix"

import type { ButtonType } from ".";

export const calculateClass = (type: ButtonType):string => {
  const defaultClass = btnClsPrefix;
  return classNames(defaultClass, `${btnClsPrefix}-${type}`);
}