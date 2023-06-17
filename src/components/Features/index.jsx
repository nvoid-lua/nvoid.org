import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Opinionated',
    description: (
      <>
        Nvoid ships with features that comes with modern IDEs like autocompletion, file explorer, fuzzy finder, LSP.
      </>
    ),
  },
  {
    title: 'Extensible',
    description: (
      <>
        through the `config.lua` you can customize nearly everything that comes with Nvoid.
      </>
    ),
  },
  {
    title: 'Made with Lua',
    description: (
      <>
        By integrating Nvoid into Lua scripts, users can further enhance their Neovim experience. The code snippet provided in the selection demonstrates how to declare and use a local variable `nvoid` in a Lua script with Nvoid.
      </>
    ),
  },
];

const Feature = ({ title, description }) => (
  <div className={clsx('col col--4')}>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <header className={clsx('feat feat--primary', styles.featBanner)}>
      <div className={`container ${styles.container}`}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Features;
