"use client";

import { ReactElement, FormEvent, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import signUpImage from "@/assets/images/sign-up.webp";

import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import NormalInputComponent from "@/components/normal-input/normal-input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";

import { SignUpDto } from "@/dto/auth.dto";

import MingcuteIncognitoModeLine from "@/icons/MingcuteIncognitoModeLine";
import MingcuteUser3Line from "@/icons/MingcuteUser3Line";
import MingcuteMailLine from "@/icons/MingcuteMailLine";

import { fetchWithToast } from "@/utils/fetch-utils";

import styles from "@/app/auth/styles/auth-form.module.css";

export default function SignUpFormComponent(): ReactElement {
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDto = {
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = await fetchWithToast<null>(
      "/api/auth/sign-up",
      {
        method: "POST",
        body: JSON.stringify(dto),
      },
      "Registration was successful.",
    );

    if (result.error) {
      return;
    }

    formRef.current?.reset();
    router.push("/dashboard");
  };
  return (
    <div className={styles["auth-form"]}>
      <CardComponent>
        <div className={styles["card-content"]}>
          <div className={styles.visuals}>
            <Image src={signUpImage} alt="" />
          </div>
          <div className={styles.writings}>
            <h1>Sign Up</h1>
            <form ref={formRef} onSubmit={formSubmitHandler}>
              <NormalInputComponent
                label="Full Name"
                type="text"
                name="name"
                prefixIcon={<MingcuteIncognitoModeLine />}
              />
              <NormalInputComponent
                label="User Name"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <NormalInputComponent
                label="Email"
                type="email"
                name="email"
                prefixIcon={<MingcuteMailLine />}
              />
              <PasswordInputComponent
                label="Password"
                name="password"
                autoComplete="new-password"
              />
              <ButtonComponent variant="primary">Sign Up</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              Already have an account?
              {` `}
              <Link href="/auth/sign-in">Sign In</Link>.
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
