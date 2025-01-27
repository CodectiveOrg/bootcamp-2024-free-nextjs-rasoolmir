import { ReactElement } from "react";

import Link from "next/link";

import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteSocialXLine from "@/icons/MingcuteSocialXLine";
import MynauiBrandFacebook from "@/icons/MynauiBrandFacebook";
import TdesignLogoInstagram from "@/icons/TdesignLogoInstagram";

import styles from "./copyright.module.css";

export default function CopyrightFooterComponent(): ReactElement {
  return (
    <div className={styles.copyright}>
      <ul className={styles.socials}>
        <li>
          <Link href="#" target="_blank">
            <MynauiBrandFacebook />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <TdesignLogoInstagram />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <MingcuteSocialXLine />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <MingcuteLinkedinFill />
          </Link>
        </li>
      </ul>
      <p>Jobior Copyright©2025</p>
    </div>
  );
}
