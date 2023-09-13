import React from "react";
import { Button } from "ydf-components";

const DSize: React.FC<void> = () => {
  return (
    <>
      <Button type="primary" size="large">large Button</Button>&nbsp;
      <Button type="primary" >middle Button</Button>&nbsp;
      <Button type="primary" size="small">small Button</Button>&nbsp;
    </>
  )
}

export default DSize;