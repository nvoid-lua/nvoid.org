# Installation

## Prerequisites

::: details Neovim 0.9.0+

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

### For Windows:
#### First Install Chocolatey in an administrative-shell

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

#### Then install neovim and powershell 7
```powershell
choco install neovim pwsh
```

:::

- [Use a Nerd Font](https://www.nerdfonts.com/) in your terminal emulator.
- `git` & other basic Linux CLI tools
- `node` to install additional language servers

### Semi-optional dependencies
- `pynvim` and [`fd`](https://github.com/sharkdp/fd)

## Install
<code-group>
<code-block title="#Linux/Unix" active>
```bash
bash <(curl -s https://raw.githubusercontent.com/nvoid-lua/nvoid/main/utils/installer/install.sh)
```
</code-block>

<code-block title="#Windows">
```bash
iwr https://raw.githubusercontent.com/nvoid-lua/nvoid/master/utils/installer/install.ps1 -UseBasicParsing | iex
```
</code-block>
</code-group>

## Uninstall

```bash
rm -rf ~/.config/nvoid/ ~/.local/share/nvoid/ ~/.cache/nvoid/
```
