import React, { useMemo, useState, useEffect } from "react";
import classnames from "classnames";
import { LoadingOutlined } from "@ant-design/icons";

import { calculateClass } from "./buttonHelper";
import "./styles/index.scss";

export type ButtonType = "default" | "primary" | "dashed" | "link" | "text";
export type ButtonShape = "default" | "circle" | "round";
export type ButtonSize = "large" | "middle" | "small";
export type ButtonDisabled = boolean;
export type ButtonBlock = boolean;
export type ButtonDanger = boolean;
export type ButtonGhost = boolean;
export type ButtonHtmlType = "button" | "submit" | "reset";
export type ButtonLoading = boolean | {delay: number};
export type ButtonHref = string;
export type ButtonClassNames = classnames.Argument;

interface ButtonProps {
  type?: ButtonType,
  shape?: ButtonShape,
  size?: ButtonSize,
  disabled?: ButtonDisabled,
  block?: ButtonBlock,
  danger?: ButtonDanger,
  ghost?: ButtonGhost,
  htmlType?: ButtonHtmlType,
  loading?: ButtonLoading,
  href?: ButtonHref,
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
    htmlType = "button",
    loading = false,
    href,
    classNames,
    children = null,
  } = props;
  
  const loadingConfig = useMemo(() => {
    if(typeof loading === "object" && loading){
      let delay = loading?.delay;
      delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
      return {
        loading: !(delay > 0),
        delay,
      }
    }else{
      return {
        loading: !!loading,
        delay: 0,
      }
    }
  }, [loading])
  
  const [innerLoading, setInnerLoading] = useState(loadingConfig?.loading);
  
  useEffect(() => {
    let delayTimer: ReturnType<typeof setTimeout> | null = null;
    if(loadingConfig?.delay > 0){
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setInnerLoading(true);
      }, loadingConfig?.delay)
    }
    
    const clearDelayTimer = () => {
      if(delayTimer){
        clearTimeout(delayTimer);
      }
    }
    
    return clearDelayTimer;
  }, [])
  
  const loadingElement = useMemo(() => {
    return innerLoading ? <LoadingOutlined style={{marginRight: "4px"}}/> : null;
  }, [innerLoading])
  
  return (
    <button
      className={calculateClass({type, shape, size, disabled, block, danger, ghost, classNames})}
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
      disabled={disabled}
    >
      {loadingElement}
      {children}
    </button>
  )
}

export default Button;
