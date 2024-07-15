import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Icon1 from "../../../static/icons/rocket.svg";
import Icon2 from "../../../static/icons/gear.svg";
import Icon3 from "../../../static/icons/lua.svg";
import Icon4 from "../../../static/icons/puzzle.svg";
import Icon5 from "../../../static/icons/server.svg";
import Icon6 from "../../../static/icons/terminal.svg";

const FeatureList = [
  {
    title: "Fast",
    icon: <Icon1 />,
    color: "var(--color-fast)",
    description: (
      <>
        Nvoid lazyloads most of the plugins to maximize speed and disabled
        plugins won't slow things down which allows Nvoid to have both speed and
        Advanced Features
      </>
    ),
  },
  {
    title: "Extensible",
    icon: <Icon2 />,
    color: "var(--color-extensible)",
    description: (
      <>
        Tailor your IDE to fit your workflow with extensive customization
        options available through Lua scripts and config.lua.
      </>
    ),
  },
  {
    title: "Made with Lua",
    icon: <Icon3 />,
    color: "var(--color-lua)",
    description: (
      <>
        The integration of Nvoid into Lua scripts enhances the Neovim
        experience. Users can declare and utilize a local variable nvoid in Lua
        scripts to leverage Nvoid functionalities within Neovim.
      </>
    ),
  },
  {
    title: "Seamless Integration",
    icon: <Icon4 />,
    color: "var(--color-integration)",
    description: (
      <>
        By having all of its UI components built in, from the colorschemes and
        statusline to the bufferline, Nvoid ensures a cohesive and seamless user
        experience.
      </>
    ),
  },
  {
    title: "Advanced LSP Support",
    icon: <Icon5 />,
    color: "var(--color-lsp)",
    description: (
      <>
        Benefit from robust Language Server Protocol (LSP) integration for
        better code completion, diagnostics, and navigation.
      </>
    ),
  },
  {
    title: "Powerful Terminal Integration",
    icon: <Icon6 />,
    color: "var(--color-terminal)",
    description: (
      <>
        Run terminal commands directly within Nvoid, ensuring a smooth workflow
        without leaving your editor.
      </>
    ),
  },
];

const Feature = ({ icon, title, description, color }) => (
  <div className={clsx("col col--4", styles.feature)}>
    <div className="text--center padding-horiz--md">
      <h3>
        <div
          className={styles.icon}
          style={{ color }}
          aria-label={title}
          role="img"
        >
          {icon} {title}
        </div>
      </h3>
      <p>{description}</p>
    </div>
  </div>
);

const Features = () => (
  <header className={clsx("featBanner", styles.featBanner)}>
    <div className={`container ${styles.container}`}>
      <div className="row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  </header>
);

export default Features;
