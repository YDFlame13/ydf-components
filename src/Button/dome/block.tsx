import React from "react";
import { Button } from "ydf-components";

const DBlock: React.FC<void> = () => {
  return (
    <>
      <Button type="primary">normal Button</Button><br/><br/>
      <Button type="primary" block={true}>block Button</Button>
    </>
  )
}

export default DBlock;