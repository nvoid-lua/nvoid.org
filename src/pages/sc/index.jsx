import Layout from "@theme/Layout";
import React, { useState, useEffect, useRef } from "react";
import mediumZoom from "medium-zoom";
import "./style.css";

const themes = {
  dark: [
    "aquarium",
    "ashes",
    "catppuccin",
    "decay",
    "doom",
    "dracula",
    "github_dark",
    "gruvbox",
    "gruvdark",
    "nightfox",
    "nord",
    "onedark",
    "pastelDark",
    "radium",
    "solarized_dark",
    "tokyodark",
    "tokyonight",
    "vscode_dark",
  ],
  light: ["github_light", "gruvbox_light", "one_light"],
};

const statuslines = ["Nvoid", "Minimal", "Evil"];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("Themes");
  const zoomRef = useRef(null);

  useEffect(() => {
    if (zoomRef.current) {
      zoomRef.current.detach(); // Clean up the previous zoom instance
    }
    zoomRef.current = mediumZoom(".item-image");
  }, [activeTab]);

  return (
    <Layout title="Showcase" description="Showcasing some screenshots">
      <div className="showcase-container">
        <div className="scTabs">
          <button
            className={`tab-button ${activeTab === "Themes" ? "active" : ""}`}
            onClick={() => setActiveTab("Themes")}
          >
            Themes
          </button>
          <button
            className={`tab-button ${activeTab === "Statuslines" ? "active" : ""}`}
            onClick={() => setActiveTab("Statuslines")}
          >
            Statuslines
          </button>
        </div>
        <main className="showcase-main">
          {activeTab === "Themes" && (
            <Section className="themes-section">
              <Subsection title="Dark" items={themes.dark} path="themes/dark" />
              <Subsection
                title="Light"
                items={themes.light}
                path="themes/light"
              />
            </Section>
          )}
          {activeTab === "Statuslines" && (
            <Section className="statuslines-section">
              <Subsection items={statuslines} path="statuslines" lowercase />
            </Section>
          )}
        </main>
      </div>
    </Layout>
  );
};

const Section = ({ title, children, className }) => (
  <section className={`content-section ${className}`}>
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const Subsection = ({ title, items, path, lowercase }) => (
  <>
    {title && <h3 className="subsection-title">{title}</h3>}
    <div className="item-grid">
      {items.map((item) => (
        <div key={item} className="item-card">
          <h4 className="item-title">{item}</h4>
          <img
            src={`/img/${path}/${lowercase ? item.toLowerCase() : item}.webp`}
            alt={item}
            className="item-image"
          />
        </div>
      ))}
    </div>
  </>
);

export default Showcase;
