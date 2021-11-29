<img :src="$withBase('/assets/Nvoid.png')" alt="nvoid.main">
<div align="center">

[![Lua](https://img.shields.io/badge/Made%20with%20Lua-blue.svg?style=for-the-badge&logo=lua)](https://lua.org)

</div>

---

# Introduction

Nvoid is an opinionated, extensible, and fast IDE layer for Neovim >= 0.5.0. Nvoid takes advantage of the latest Neovim features such as [Treesitter](https://tree-sitter.github.io/tree-sitter/) and [Language Server Protocol](https://en.wikipedia.org/wiki/Language_Server_Protocol) support.

## Opinionated

Nvoid ships with a sane default config for you to build on top of. Features include autocompletion, integrated terminal, file explorer, fuzzy finder, LSP, linting, formatting and debugging.

## Extensible

Just because Nvoid has an opinion doesn't mean you need to share it. Every builtin plugin can be toggled on or off in the `nv-config.lua` file. This is the place to add your own plugins, keymaps, autocommands, leader bindings and all other custom settings.

## Fast

Nvoid lazyloads plugins wherever possible to maximize speed. Disabled plugins also will not decrease speed due to the plugin list being compiled with only the active plugins. This strategy allows Nvoid to not have to choose between features and speed.
