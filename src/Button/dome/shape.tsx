import React from "react";
import { Button } from "ydf-components";

const DShape: React.FC<void> = () => {
  return (
    <>
      <Button>default Button</Button>&nbsp;
      <Button shape="circle">circle Button</Button>&nbsp;
      <Button shape="round">round Button</Button>&nbsp;
    </>
  )
}

export default DShape;