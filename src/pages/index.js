import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// Extras
import Hero from "../components/Hero";
import Preview from "@site/src/components/Preview";
import Features from "@site/src/components/Features";

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
