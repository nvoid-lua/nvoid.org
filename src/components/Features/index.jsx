import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fast",
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
    description: (
      <>
        Tailor your IDE to fit your workflow with extensive customization
        options available through Lua scripts and config.lua.
      </>
    ),
  },
  {
    title: "Made with Lua",
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
    description: (
      <>
        Benefit from robust Language Server Protocol (LSP) integration for
        better code completion, diagnostics, and navigation.
      </>
    ),
  },
  {
    title: "Powerful Terminal Integration",
    description: (
      <>
        Run terminal commands directly within Nvoid, ensuring a smooth workflow
        without leaving your editor.
      </>
    ),
  },
];

const Feature = ({ title, description }) => (
  <div className={clsx("col col--4", styles.feature)}>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
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
