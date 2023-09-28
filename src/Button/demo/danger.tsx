import React from "react";
import { Button } from "ydf-components";

const DDanger: React.FC<void> = () => {
  return (
    <>
      <Button type="primary" danger={true}>Danger Primary</Button>&nbsp;
      <Button danger={true}>Danger Default</Button>&nbsp;
      <Button type="dashed" danger={true}>Danger Dashed</Button>&nbsp;
      <Button type="text" danger={true}>Danger Text</Button>&nbsp;
      <Button type="link" danger={true}>Danger Link</Button>&nbsp;
    </>
  )
}

export default DDanger;