import React from "react";
import Layout from "@theme/Layout";
import "./style.css";

const Showcase = () => {
  return (
    <Layout title="Showcase" description="Showcasing some screenshots">
      <div className="showcase-container">
        <main className="showcase-main">
          <h2 id="themes" className="content-section h2Text">
            Themes
          </h2>

          <h3 id="dark" className="content-section h3Text">
            Dark
          </h3>
          <div className="theme-section">
            {[
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
            ].map((theme) => (
              <div key={theme} className="theme-item">
                <h4 className="theme-title">{theme}</h4>
                <img
                  src={`/img/themes/dark/${theme}.webp`}
                  alt={theme}
                  className="showcase-image"
                />
              </div>
            ))}
          </div>

          <h3 id="light" className="content-section h3Text">
            Light
          </h3>
          <div className="theme-section">
            {["github_light", "gruvbox_light", "one_light"].map((theme) => (
              <div key={theme} className="theme-item">
                <h4 className="theme-title">{theme}</h4>
                <img
                  src={`/img/themes/light/${theme}.webp`}
                  alt={theme}
                  className="showcase-image"
                />
              </div>
            ))}
          </div>

          <h2 id="statuslines" className="content-section h2Text">
            Statuslines
          </h2>
          <div className="statusline-section">
            {["Nvoid", "Minimal", "Evil"].map((statusline) => (
              <div key={statusline} className="statusline-item">
                <h4 className="statusline-title">{statusline}</h4>
                <img
                  src={`/img/statuslines/${statusline.toLowerCase()}.webp`}
                  alt={statusline}
                  className="showcase-image"
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Showcase;
