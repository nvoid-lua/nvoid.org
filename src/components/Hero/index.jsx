import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import NvoidLogo from "../../../static/icons/nvoid.svg";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import Description from "./Description";
import Arrow from "../../../static/icons/arrow.svg";

const Hero = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          <h1 className={`hero__title ${styles.heroTitle}`}>Nvoid</h1>
          <Description />
          <div className={styles.buttons}>
            <Link
              className={classnames("btn1 button--lg", styles.btn1)}
              to={useBaseUrl("/docs/install")}
            >
              Get Started
              <Arrow className={styles.Arrowsvg} />
            </Link>
            <Link
              className={classnames("btn2 button--lg", styles.btn2)}
              to={useBaseUrl("/ds")}
            ></Link>
          </div>
        </div>
        <NvoidLogo className={styles.Nvoidsvg} />
      </div>
    </header>
  );
};

export default Hero;
