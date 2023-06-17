import React, { } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import classnames from "classnames"

const Hero = () => {

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heroContent}>
          <h1 className={`hero__title ${styles.heroTitle}`}>Nvoid</h1>
          <p className={`hero__description ${styles.heroDescription} `}>
            An enhanced version of the {' '}
            <a href='https://neovim.io' target={'_blank'}>
              Neovim
            </a>{' '}
            {' '}text editor
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--primary button--lg rounded-pill",
                styles.button
              )}
              to={useBaseUrl("/docs/install")}
            >
              Get Started
            </Link>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg rounded-pill",
                styles.button
              )}
              to={useBaseUrl("/docs/configuration")}
            >
              Config
            </Link>
          </div>


        </div>
        <div className={styles.heroImage}>
          <img
            src={require('@site/static/img/nvoid_logo.png').default}
            alt={"Nvoid logo"}
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
