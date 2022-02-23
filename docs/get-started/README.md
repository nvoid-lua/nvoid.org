# Installation
## Pre-requisites

::: details Neovim 0.6.0+

### NeoVim installation options

> Note: This is a summary of [NeoVim's installation page](https://github.com/neovim/neovim/wiki/Installing-Neovim)

#### [With an appimage](https://github.com/neovim/neovim/wiki/Installing-Neovim#appimage-universal-linux-package)

This should work across all Linux distros.

```shell
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
chmod u+x nvim.appimage
./nvim.appimage
```

Then consider moving this to your local/user bin & adding an alias to this

```shell
mv ./nvim.appimage ~/.local/bin/
echo "alias vim='/home/<YOUR USERNAME>/.local/bin/nvim.appimage'" >>~/.<bashrc or zshrc>
```

#### [Using PACMAN on Arch](https://github.com/neovim/neovim/wiki/Installing-Neovim#arch-linux)

```shell
sudo pacman -S neovim
```

#### [Using APT on Ubuntu](https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu)

> Note: This doesn't work with Debian

```shell
sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt-get update
sudo apt-get install neovim
```
:::

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
bash -c "$(curl -s https://raw.githubusercontent.com/ysfgrgO7/nvoid/main/.github/installer.sh)"
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
