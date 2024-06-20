import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import PickVersion from "./pick";

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
          {/* <h2 className="tw-inline-block tw-text-base lg:tw-text-lg tw-font-semibold tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur"> */}
          {/*   Install with one command */}
          {/* </h2> */}
          {/* <PickVersion className="!tw-mb-0"> */}
          {/*   { */}
          {/*     "bash <(curl -s https://raw.githubusercontent.com/nvoid-lua/nvoid/main/utils/installer/install.sh)" */}
          {/*   } */}
          {/* </PickVersion> */}
        </div>
      </div>
    </header>
  );
};

export default Hero;
