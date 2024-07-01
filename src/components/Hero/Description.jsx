import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

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

export default Slogan;
