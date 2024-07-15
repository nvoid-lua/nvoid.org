import React, { useState, useEffect } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Dot from "../../../static/icons/circle.svg";
import DotA from "../../../static/icons/circleA.svg";

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

const Spinner = () => (
  <div className={styles.spinner}>
    <div className={styles.doubleBounce1}></div>
    <div className={styles.doubleBounce2}></div>
  </div>
);

const Preview = () => {
  const {
    siteConfig: {
      customFields: { previewImgs },
    },
  } = useDocusaurusContext();

  const [previewIdx, setPreviewIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const imgSrc = useBaseUrl(previewImgs[previewIdx].src);

  const handleNext = () => {
    setLoading(true);
    setPreviewIdx((prevIdx) => (prevIdx + 1) % previewImgs.length);
  };

  const handlePrev = () => {
    setLoading(true);
    setPreviewIdx(
      (prevIdx) => (prevIdx - 1 + previewImgs.length) % previewImgs.length,
    );
  };

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setLoading(false);
  }, [imgSrc]);

  return (
    <header className={clsx("feat feat--primary", styles.featBanner)}>
      <div className={`container ${styles.container}`}>
        <div className={styles.slider}>
          {loading && <Spinner />}
          <img
            src={imgSrc}
            alt={previewImgs[previewIdx].alt}
            loading="lazy"
            className={clsx(styles.fadeIn, { [styles.hidden]: loading })}
            onLoad={() => setLoading(false)}
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
                onClick={() => {
                  setLoading(true);
                  setPreviewIdx(idx);
                }}
                className={clsx(styles.dot, {
                  [styles.active]: idx === previewIdx,
                })}
                aria-label={`Preview Image ${idx + 1}`}
                role="button"
              >
                {idx === previewIdx ? (
                  <DotA className={styles.cir} />
                ) : (
                  <Dot className={styles.cir} />
                )}
              </button>
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
