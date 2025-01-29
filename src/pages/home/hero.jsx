import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import NvoidLogo from "../../../static/icons/nvoid.svg";
import styles from "./hero.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import classnames from "classnames";
import Arrow from "../../../static/icons/arrow.svg";

const Slogan = () => {
  const taglineList = [
    "Hello!",
    "An enhanced version of the Neovim text editor",
  ];

  const [state, setState] = useState({
    sloganText: "",
    currentSloganIdx: 0,
    currentTaglineIdx: 0,
  });

  const TYPING_SPEED = 115;
  const WAIT_DURATION = 2500;

  useEffect(() => {
    const { currentSloganIdx, currentTaglineIdx } = state;

    const typewriterEffect = () => {
      if (currentSloganIdx - 3 === taglineList[currentTaglineIdx].length) {
        setTimeout(() => {
          setState({
            sloganText: "",
            currentSloganIdx: 0,
            currentTaglineIdx: (currentTaglineIdx + 1) % taglineList.length,
          });
        }, WAIT_DURATION);
      } else {
        setState((prevState) => ({
          ...prevState,
          sloganText: taglineList[currentTaglineIdx].substring(
            0,
            currentSloganIdx,
          ),
          currentSloganIdx: currentSloganIdx + 1,
        }));
      }
    };

    const timeout = setTimeout(typewriterEffect, TYPING_SPEED);
    return () => clearTimeout(timeout);
  }, [state]);

  return (
    <p className={`hero__subtitle ${styles.slogan}`}>{state.sloganText}</p>
  );
};

const Hero = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          <h1 className={`hero__title ${styles.heroTitle}`}>Nvoid</h1>
          <Slogan />
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
              to={useBaseUrl("/docs")}
            ></Link>
          </div>
        </div>
        <NvoidLogo className={styles.Nvoidsvg} />
      </div>
    </header>
  );
};

export default Hero;
