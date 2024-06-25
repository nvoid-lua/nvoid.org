import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import "./style.css"; // Assuming you have a styles.css file for your CSS
import mediumZoom from "medium-zoom";

const Showcase = () => {
  const [activeSection, setActiveSection] = useState("");

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

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const headings = document.querySelectorAll(".content-section");
      headings.forEach((heading) => {
        const sectionId = heading.id;
        const sectionOffset = heading.offsetTop;
        const sectionHeight = heading.offsetHeight;

        if (
          scrollPosition >= sectionOffset &&
          scrollPosition < sectionOffset + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      zoom.off("open", handleShow);
      zoom.off("close", handleHide);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
                <h4 className="theme-title">{statusline}</h4>
                <img
                  src={`/img/statuslines/${statusline.toLowerCase()}.png`}
                  alt={statusline}
                  className="showcase-image"
                />
              </div>
            ))}
          </div>
        </main>

        <div className="sidebar">
          <nav className="toc">
            <ul>
              <li>
                <a
                  href="#themes"
                  className={activeSection === "themes" ? "active" : ""}
                  onClick={() => handleNavLinkClick("themes")}
                >
                  Themes
                </a>
                <ul>
                  <li>
                    <a
                      href="#dark"
                      className={activeSection === "dark" ? "active" : ""}
                      onClick={() => handleNavLinkClick("dark")}
                    >
                      Dark
                    </a>
                  </li>
                  <li>
                    <a
                      href="#light"
                      className={activeSection === "light" ? "active" : ""}
                      onClick={() => handleNavLinkClick("light")}
                    >
                      Light
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#statuslines"
                  className={activeSection === "statuslines" ? "active" : ""}
                  onClick={() => handleNavLinkClick("statuslines")}
                >
                  Statuslines
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
};

export default Showcase;
