import React, { useState } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// Example SVG icons for arrows (adjust as per your icon choice)
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-left"
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-arrow-right"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Preview = () => {
  const {
    siteConfig: {
      customFields: { previewImgs },
    },
  } = useDocusaurusContext();

  const [previewIdx, setPreviewIdx] = useState(0);

  const handleNext = () => {
    setPreviewIdx((prevIdx) => (prevIdx + 1) % previewImgs.length);
  };

  const handlePrev = () => {
    setPreviewIdx(
      (prevIdx) => (prevIdx - 1 + previewImgs.length) % previewImgs.length,
    );
  };

  return (
    <header className={clsx("feat feat--primary", styles.featBanner)}>
      <div className={`container ${styles.container}`}>
        <div className={styles.slider}>
          <img
            src={useBaseUrl(previewImgs[previewIdx].src)}
            alt={previewImgs[previewIdx].alt}
            loading="lazy"
            className={styles.fadeIn}
          />
        </div>
        <div className={styles.navButtons}>
          <button
            onClick={handlePrev}
            className={styles.navButton}
            aria-label="Previous Image"
          >
            <ArrowLeftIcon />
          </button>
          <div className={styles.dots}>
            {previewImgs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPreviewIdx(idx)}
                className={clsx(styles.dot, {
                  [styles.active]: idx === previewIdx,
                })}
                aria-label={`Preview Image ${idx + 1}`}
                role="button"
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className={styles.navButton}
            aria-label="Next Image"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Preview;
