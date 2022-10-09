# Features

**Nvoid** comes with many features you find in a modern IDE

## It's Fast
here's a quick comparison
### Nvoid(New)
```
Time (mean ± σ):      66.2 ms ±   3.9 ms    [User: 43.6 ms, System: 21.8 ms]
Range (min … max):    56.0 ms …  76.0 ms    43 runs
```
### Nvoid(Old)
```
Time (mean ± σ):     121.3 ms ±   6.5 ms    [User: 89.0 ms, System: 31.4 ms]
Range (min … max):   109.7 ms … 135.6 ms    21 runs
```
### Lunarvim
```
Time (mean ± σ):     196.2 ms ±   6.5 ms    [User: 130.6 ms, System: 63.4 ms]
Range (min … max):   188.2 ms … 215.4 ms    15 runs
```
### Nvchad
```
Time (mean ± σ):      24.7 ms ±   3.3 ms    [User: 15.9 ms, System: 8.3 ms]
Range (min … max):    20.4 ms …  32.6 ms    93 runs
```

These were run buy `hyperfine`

## [`packer.nvim`](https://github.com/wbthomason/packer.nvim)

Plugin manager written in lua
<img :src="$withBase('/assets/packer.png')" alt="Packer scrot">

`PackerStatus` cmd

## [`LSP`](https://github.com/neovim/nvim-lspconfig)

Nvoid take's advantage of [`language server protocol`](https://microsoft.github.io/language-server-protocol/) which provides better completion and by using `:LspInstall <language name>` to add the language to nvoid.

## [`cmp`](https://github.com/hrsh7th/nvim-cmp)

A completion engine plugin for neovim written in Lua. Completion sources are installed from external repositories and "sourced".
<img :src="$withBase('/assets/cmp.png')" alt="Cmp scrot">

## Rename
`leader` `l` `r`
<img :src="$withBase('/assets/rename.png')" alt="Rename scrot">

## [`Telescope`](https://github.com/nvim-telescope/telescope.nvim)

A fuzzy finder written in lua
<img :src="$withBase('/assets/telescope.png')" alt="Telescope scrot">

`leader` `f` `f`

## [`nvim-tree.lua`](https://github.com/kyazdani42/nvim-tree.lua)

A file explorer tree for neovim written in lua
<h3 align="left">
  <img :src="$withBase('/assets/nvim-tree.png')" alt="Nvim Tree scrot">
</h3>

`leader` `e`

## [`Treesitter`](https://github.com/nvim-treesitter/nvim-treesitter)

Syntax highlighting engine
<img :src="$withBase('/assets/treesitter.png')" alt="Treesitter scrot">
left `on` right `off`
