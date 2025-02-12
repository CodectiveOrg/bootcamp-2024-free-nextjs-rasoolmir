import React, { ReactElement, useState } from "react";

import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";
import MingcuteBookmarkFill from "@/icons/MingcuteBookmarkFill";

import styles from "./book-mark.module.css";

export default function BookMarkComponent(): ReactElement {
  const [isIconOneVisible, setIsIconOneVisible] = useState(true);

  const handleClick = () => {
    setIsIconOneVisible(!isIconOneVisible);
  };

  return (
    <div className={styles["book-mark"]} onClick={handleClick}>
      {isIconOneVisible ? <MingcuteBookmarkLine /> : <MingcuteBookmarkFill />}
    </div>
  );
}
