"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ButtonLinkComponent } from "@/components/button/button.component";

import JobiorLogo from "@/logo/jobior.logo";
import StashSigninLight from "@/icons/StashSigninLight";

import clsx from "clsx";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Link href="/">
            <JobiorLogo />
          </Link>
        </div>
        <div className={styles.btns}>
          <Link href="/empoloyers" className={styles.empoloyers}>
            Empoloyers
          </Link>
          <div className={styles.divider}></div>
		  
		  <ButtonLinkComponent
        variant="primary"
        shape="outlined"
        className={styles.cta}
        href="/auth/sign-in"
      >
        <StashSigninLight /> sign up
      </ButtonLinkComponent>
        </div>
      </div>
      <div className={styles.bottom}>
        <nav>
          <ul>
            <li>
              <Link
                href="/search"
                className={clsx(pathname === "/search" && styles.active)}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/Companies"
                className={clsx(pathname === "/companies" && styles.active)}
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                href="/createcv"
                className={clsx(pathname === "/createcv" && styles.active)}
              >
                Create CV
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
