# Features
**Nvoid** comes with many features you find in a modern IDE
## Plugins
### Core Plugins
#### [`packer.nvim`](https://github.com/wbthomason/packer.nvim)
Plugin manager written in lua
<img :src="$withBase('/assets/nvoid_packer.png')" alt="Packer scrot">
<div align="center">

`PackerStatus` cmd
</div>

#### [`LSP`](https://github.com/neovim/nvim-lspconfig)
Nvoid take's advantage of [`language server protocol`](https://microsoft.github.io/language-server-protocol/) which provides better completion and by using `:LspInstall <language name>` to add the language to nvoid.

#### [`cmp`](https://github.com/hrsh7th/nvim-cmp)
A completion engine plugin for neovim written in Lua. Completion sources are installed from external repositories and "sourced".
<img :src="$withBase('/assets/nvoid_cmp.png')" alt="cmp scrot">

#### [`Telescope`](https://github.com/nvim-telescope/telescope.nvim)
A fuzzy finder written in lua
<img :src="$withBase('/assets/nvoid_telescope.png')" alt="Telescope scrot">


### Ui Plugins
#### [`Alpha`](https://github.com/goolord/alpha-nvim)
A light start screen fully written in lua
<img :src="$withBase('/assets/nvoid_alpha.png')" alt="Alpha scrot">

#### [`LuaLine`](https://github.com/nvim-lualine/lualine.nvim)
A blazing fast and easy to configure Neovim statusline written in Lua


nvoid ships with 2 styles:
- Nvoid
<img :src="$withBase('/assets/nvoid_line_nvoid.png')" alt="Nvoid line scrot">
- Vscode
<img :src="$withBase('/assets/nvoid_line_vscode.png')" alt="Vscode line scrot">
