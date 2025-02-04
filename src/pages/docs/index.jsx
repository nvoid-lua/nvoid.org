import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

import InIcon from "../../../static/icons/download.svg";
import ConIcon from "../../../static/icons/gear.svg";
import FeatIcon from "../../../static/icons/list.svg";
import ScIcon from "../../../static/icons/gallery.svg";

const icons = {
  install: InIcon,
  configuration: ConIcon,
  features: FeatIcon,
  showcase: ScIcon,
};

const SquareLink = ({ to, icon, title, description }) => {
  const IconComponent = icons[icon];
  return (
    <Link to={to} className={styles.square}>
      <div className={styles.squareContent}>
        <div className={styles.contentTitle}>
          <IconComponent className={styles.icon} />
          <a className={styles.titleText}>{title}</a>
        </div>
        <h4>
          {description} <code>nvoid</code>
        </h4>
      </div>
    </Link>
  );
};

const Ds = () => {
  return (
    <Layout title="Docs" description="docs">
      <main className={styles.mainContent}>
        <h1 className={styles.mainTitle}>
          Welcome to the <code>nvoid</code> <strong>Docs</strong>
        </h1>
        <div className={styles.squareContainer}>
          <SquareLink
            to="/docs/install"
            icon="install"
            title="Installation"
            description="A guide to install"
          />
          <SquareLink
            to="/docs/configuration"
            icon="configuration"
            title="Configuration"
            description="A comprehensive guide for configuring"
          />
          <SquareLink
            to="/docs/features"
            icon="features"
            title="Features"
            description="A demonstration of the features of"
          />
          <SquareLink
            to="/showcase"
            icon="showcase"
            title="Showcase"
            description="Showcasing the beauty of"
          />
        </div>
      </main>
    </Layout>
  );
};

export default Ds;
