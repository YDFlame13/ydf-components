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
  return classNames(
    defaultClass,
    `${btnClsPrefix}-${type}`,
    `${btnClsPrefix}-${shape}`,
  );
}