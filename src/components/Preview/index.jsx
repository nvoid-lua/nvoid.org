import React, { useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const Preview = () => {
  const {
    siteConfig: {
      customFields: { previewImgs },
    },
  } = useDocusaurusContext();

  const [previewIdx, setPreviewIdx] = useState(0);
  const imgsCount = previewImgs.length;

  const nextImg = () => {
    setPreviewIdx((prevIdx) => (prevIdx + 1) % imgsCount);
  };

  const prevImg = () => {
    setPreviewIdx((prevIdx) => (prevIdx - 1 + imgsCount) % imgsCount);
  };

  return (
    <header className={clsx("feat feat--primary", styles.featBanner)}>
      <div className={`container ${styles.container}`}>
        <div className={styles.slider}>
          <img
            src={useBaseUrl(previewImgs[previewIdx].src)}
            alt={previewImgs[previewIdx].alt}
            loading="lazy"
          />
        </div>
        <div className={styles.dots}>
          {previewImgs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPreviewIdx(idx)}
              className={clsx(styles.dot, {
                [styles.active]: idx === previewIdx,
              })}
              aria-label={`Preview Image ${idx + 1}`}
            />
          ))}
        </div>
        <button
          className={clsx(styles.btn, styles.prev)}
          onClick={prevImg}
          aria-label="Previous Image"
        >
          <Arrow />
        </button>
        <button
          className={clsx(styles.btn, styles.next)}
          onClick={nextImg}
          aria-label="Next Image"
        >
          <Arrow />
        </button>
      </div>
    </header>
  );
};

const Arrow = () => (
  <svg width="29" height="30" viewBox="0 0 18 19" fill="none">
    <path
      d="M4.5 7.05497L9 11.7325L13.5 7.05497"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Preview;
