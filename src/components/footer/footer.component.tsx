import { ReactElement } from "react";

import LanguageFooterComponent from "@/components/footer/components/language-footer/language-footer.component";
import VisualsFooterComponent from "@/components/footer/components/visuals-footer/visuals-footer.component";
import AppFooterComponent from "@/components/footer/components/app-footer/app-footer.component";
import CopyrightFooterComponent from "@/components/footer/components/copyright-footer/copyright-footer.component";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-top"]}>
        <LanguageFooterComponent />
        <VisualsFooterComponent />
        <AppFooterComponent />
      </div>
      <div className={styles["footer-bottom"]}>
        <CopyrightFooterComponent />
      </div>
    </footer>
  );
}
