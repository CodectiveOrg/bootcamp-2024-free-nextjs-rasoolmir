"use client";

import { FormEvent, ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import signInImage from "@/assets/images/sign-in.webp";

import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import NormalInputComponent from "@/components/normal-input/normal-input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";
import MingcuteUser3Line from "@/icons/MingcuteUser3Line";

import styles from "@/app/auth/styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <div className={styles["auth-form"]}>
      <CardComponent>
        <div className={styles["card-content"]}>
		<div className={styles.visuals}>
            <Image src={signInImage} alt=""/>
          </div>
          <div className={styles.writings}>
            <h1>Sign In</h1>
            <form onSubmit={formSubmitHandler}>
              <NormalInputComponent
                label="User Name"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <PasswordInputComponent
                label="Password"
                name="password"
                autoComplete="current-password"
              />
              <ButtonComponent variant="primary">Sign In</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              Don't have an account?
              {` `}
              <Link href="/auth/sign-up">Sign Up</Link>.
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
