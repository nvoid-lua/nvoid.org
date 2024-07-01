import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// Extras
import Hero from "../components/Hero";
import Features from "@site/src/components/Features";
import Preview from "@site/src/components/Preview";

import classnames from "classnames";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <main>
        <Hero />
        <Preview />
        <Features />
      </main>
    </Layout>
  );
}
