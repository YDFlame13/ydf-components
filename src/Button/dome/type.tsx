import React from "react";
import { Button } from "ydf-components";

const DType: React.FC<void> = () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>&nbsp;
      <Button>Default Button</Button>&nbsp;
      <Button type="dashed">Dashed Button</Button>&nbsp;
      <Button type="text">Text Button</Button>&nbsp;
      <Button type="link">Link Button</Button>&nbsp;
    </>
  )
}

export default DType;