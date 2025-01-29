import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// Extras
import Hero from "./home/hero";
import Preview from "./home/preview";
import Features from "./home/features";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="" description={siteConfig.tagline}>
      <main>
        <Hero />
        <Preview />
        <Features />
      </main>
    </Layout>
  );
}
