"use client";

import { ReactElement } from "react";

import Image from "next/image";

import errorImage from "@/assets/illustrations/error.svg";

import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles["error"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>We have become unfortunate!</div>
        <h1>An unexpected error has occurred</h1>
        <p>Please contact the support team.</p>
      </div>
      <div className={styles.visuals}>
        <Image src={errorImage} alt="" />
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>Try again</button>
      </div>
      <div className={styles.trace}>
        <details>
          <summary>Error log</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}
