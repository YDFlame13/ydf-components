import React from "react";
import { Button } from "ydf-components";
import styles from "./ghost.module.scss";

const DGhost: React.FC<void> = () => {
  return (
    <div className={styles.root}>
      <Button type="primary" ghost>Ghost Primary</Button>&nbsp;
      <Button danger={true} ghost>Ghost Danger Default</Button>&nbsp;
      <Button type="dashed" ghost>Ghost Dashed</Button>&nbsp;
      <Button type="text" ghost>Ghost Text</Button>&nbsp;
      <Button type="link" ghost>Ghost Link</Button>&nbsp;
    </div>
  )
}

export default DGhost;