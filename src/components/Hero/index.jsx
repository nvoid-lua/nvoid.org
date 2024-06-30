import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";

const Hero = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          <h1 className={`hero__title ${styles.heroTitle}`}>Nvoid</h1>
          <p className={`hero__description ${styles.heroDescription} `}>
            An enhanced version of the{" "}
            <a href="https://neovim.io" target={"_blank"}>
              Neovim
            </a>{" "}
            text editor
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames("btn1 button--lg", styles.btn1)}
              to={useBaseUrl("/docs/install")}
            >
              Get Started
            </Link>
            <Link
              className={classnames("btn2 button--lg", styles.btn2)}
              to={useBaseUrl("/docs/configuration")}
            ></Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src={require("@site/static/img/nvoid_logo.png").default}
            alt={"Nvoid logo"}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
