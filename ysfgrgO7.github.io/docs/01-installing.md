# Installation
## Pre-requisites
- Make sure you have installed the latest version of [`Neovim 0.5`](https://github.com/neovim/neovim/releases/tag/v0.5.0).
- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.
- `git` & other basic Linux CLI tools
### Semi-optional dependencies
- `node` **Node.js** is required for many Language Servers (LSPs)
- `ranger` Some file management alongside nvimtree
- `lazygit` Some git stuff
- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is required for grep searching with _Telescope_
## Install
### Install in one command
```shell
bash -c "$(curl -s https://raw.githubusercontent.com/ysfgrgO7/nvoid/main/.github/NVOID-Install.sh)"
```
### Manual Install
```shell
git clone --depth 1 https://github.com/wbthomason/packer.nvim\
 ~/.local/share/nvim/site/pack/packer/start/packer.nvim
git clone https://github.com/ysfgrgO7/nvoid.git ~/.config/nvim
nvim -c 'autocmd User PackerComplete quitall' -c 'PackerSync'
nvim
```
## Uninstall

```bash
rm -rf ~/.config/nvim/
rm -rf ~/.local/share/nvim/
```
