import React from "react";
import type { IconDefinition } from "@ant-design/icons-svg/lib/types";

export const getSvgNode = (icon: IconDefinition) => {
  const SvgNode = () => {
    return React.createElement("svg", {
      icon,
    })
  };
  
  return SvgNode;
}