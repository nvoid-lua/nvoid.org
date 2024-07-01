import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import mediumZoom from "medium-zoom";
import "./style.css"; // Assuming you have a styles.css file for your CSS

const Showcase = () => {
  useEffect(() => {
    const zoom = mediumZoom(".showcase-image");

    const handleShow = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.add("navbar-hidden");
      }
    };

    const handleHide = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.remove("navbar-hidden");
      }
    };

    zoom.on("open", handleShow);
    zoom.on("close", handleHide);

    return () => {
      zoom.off("open", handleShow);
      zoom.off("close", handleHide);
    };
  }, []);

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
                  src={`/img/themes/dark/${theme}.png`}
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
                  src={`/img/themes/light/${theme}.png`}
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
                  src={`/img/statuslines/${statusline.toLowerCase()}.png`}
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
