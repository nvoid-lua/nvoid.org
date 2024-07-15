import React from "react";
import Layout from "@theme/Layout";
import "./style.css"; // Assuming you have a styles.css file for your CSS

const Ak = () => {
  return (
    <Layout title="Acknowledgements" description="Ak">
      <main className="ak-main">
        <div className="ak-container">
          <h1 className="ak-title">Special Thanks To</h1>
          <p className="ak-intro">
            These projects have been instrumental in making Nvoid possible:
          </p>

          <ul className="ak-project-list">
            <li className="ak-project-item">
              <a
                href="https://github.com/LunarVim/LunarVim"
                className="ak-project-link"
              >
                Lunarvim
              </a>
            </li>
            <li className="ak-project-item">
              <a
                href="https://github.com/CosmicNvim/CosmicNvim"
                className="ak-project-link"
              >
                CosmicNvim
              </a>
            </li>
            <li className="ak-project-item">
              <a
                href="https://github.com/NvChad/NvChad"
                className="ak-project-link"
              >
                Nvchad
              </a>
            </li>
            <li className="ak-project-item">
              <a
                href="https://github.com/crivotz/nv-ide"
                className="ak-project-link"
              >
                Nv-ide
              </a>
            </li>
            <li className="ak-project-item">
              <a
                href="https://github.com/samrath2007/kyoto.nvim"
                className="ak-project-link"
              >
                Kyoto.nvim
              </a>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default Ak;
