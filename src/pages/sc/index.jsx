import React from "react";
import Layout from "@theme/Layout";
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

const Showcase = () => (
  <Layout title="Showcase" description="Showcasing some screenshots">
    <div className="showcase-container">
      <main className="showcase-main">
        <Section title="Themes" className="themes-section">
          <Subsection title="Dark" items={themes.dark} path="themes/dark" />
          <Subsection title="Light" items={themes.light} path="themes/light" />
        </Section>
        <Section title="Statuslines" className="statuslines-section">
          <Subsection items={statuslines} path="statuslines" lowercase />
        </Section>
      </main>
    </div>
  </Layout>
);

const Section = ({ title, children, className }) => (
  <section className={`content-section ${className}`}>
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const Subsection = ({ title, items, path, lowercase }) => (
  <>
    <h3 className="subsection-title">{title}</h3>
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
