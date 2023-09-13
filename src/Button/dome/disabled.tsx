import React from "react";
import { Button } from "ydf-components";

const DDisabled: React.FC<void> = () => {
  return (
    <>
      <Button type="dashed">normal Button</Button>&nbsp;
      <Button type="dashed" disabled={true}>disabled Button</Button>&nbsp;
    </>
  )
}

export default DDisabled;