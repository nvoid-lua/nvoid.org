import React from "react";
import Layout from "@theme/Layout";
import "./style.css"; // Assuming you have a styles.css file for your CSS

const Ak = () => {
  return (
    <Layout title="Ak" description="Ak">
      <main className="ak-main">
        <h1 className="ak-title">Thanks To</h1>

        <ul className="ak-list">
          <li className="ak-item">
            <a href="https://github.com/neovim/neovim" className="ak-link">
              NeoVim
            </a>{" "}
            &{" "}
            <a href="https://github.com/vim/vim" className="ak-link">
              Vim
            </a>
          </li>
          <li className="ak-item">
            And these awesome projects that made Nvoid possible:
          </li>
        </ul>

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
            </a>{" "}
            (For the awesome cosmicUI repo)
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
      </main>
    </Layout>
  );
};

export default Ak;
