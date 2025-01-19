"use client";

import { ReactElement, useState } from "react";

import Link from "next/link";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

import MingcuteGooglePlayLine from "@/icons/MingcuteGooglePlayLine";
import MingcuteAppleLine from "@/icons/MingcuteAppleLine";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteSocialXLine from "@/icons/MingcuteSocialXLine";
import MynauiBrandFacebook from "@/icons/MynauiBrandFacebook";
import TdesignLogoInstagram from "@/icons/TdesignLogoInstagram";

import styles from "./footer.module.css";

const options: SelectOptionType[] = [
  { value: "en", label: "English" },
  { value: "fa", label: "فارسی" },
];

export default function FooterComponent(): ReactElement {
  const [selectedlanguage, setSelectedlanguage] = useState("language");
  const changeHandler = (value: string): void => {
    setSelectedlanguage(value);
  };
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.lang}>
          <SelectComponent
            options={options}
            selectedOption={
              options.find((option) => option.value === selectedlanguage) || {
                value: "",
                label: selectedlanguage,
              }
            }
            onSelectedOptionChange={(option) => changeHandler(option.value)}
          />
        </div>
        <div className={styles.visuals}>
          <ul className={styles.company}>
            <h3>Company</h3>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
          </ul>
          <ul className={styles.resources}>
            <h3>Resources</h3>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
            <li>
              <Link href="#">Partners</Link>
            </li>
            <li>
              <Link href="#">Employers</Link>
            </li>
          </ul>
          <ul className={styles.suport}>
            <h3>Suport</h3>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Privacy Plicy</Link>
            </li>
            <li>
              <Link href="#">Terms Of Use</Link>
            </li>
          </ul>
          <ul className={styles.about}>
            <h3>About Us</h3>
            <li>
              <Link href="#">About Jobior</Link>
            </li>
            <li>
              <Link href="#">Work for Jobior</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className={styles.app}>
          <button className={styles.app_google}>
            <MingcuteGooglePlayLine /> Google Play
          </button>
          <button className={styles.app_apple}>
            <MingcuteAppleLine /> App Store
          </button>
        </div>
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
      </footer>
    </>
  );
}
