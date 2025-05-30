"use client";

import { ReactElement } from "react";

import { useRouter } from "next/navigation";

import { ButtonComponent } from "@/components/button/button.component";

import { fetchWithToast } from "@/utils/fetch-utils";

import styles from "./page.module.css";

export default function Page(): ReactElement {
  const router = useRouter();

  const signOutButtonClickHandler = async (): Promise<void> => {
    const result = await fetchWithToast<null>(
      "/api/auth/sign-out",
      {
        method: "POST",
      },
      "See you later",
    );

    if (result.error) {
      return;
    }

    router.push("/");
  };

  return (
    <div className={styles.page}>
      <h1>Dashboard</h1>
      <ButtonComponent variant="danger" onClick={signOutButtonClickHandler}>
        Log out
      </ButtonComponent>
    </div>
  );
}
