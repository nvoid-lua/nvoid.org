# Features

**Nvoid** comes with many features you find in a modern IDE

## [`Lazy.nvim`](https://github.com/folke/lazy.nvim)

![lazy nvim](/img/lazy.png)

## [`LSP`](https://github.com/neovim/nvim-lspconfig)

Nvoid take's advantage of [`language server protocol`](https://microsoft.github.io/language-server-protocol/) which provides better completion and by using `:LspInstall <language name>` to add the language to nvoid.

## [`cmp`](https://github.com/hrsh7th/nvim-cmp)

A completion engine plugin for neovim written in Lua. Completion sources are installed from external repositories and "sourced".
![CMP](/img/preview/cmp.png)

## [`Telescope`](https://github.com/nvim-telescope/telescope.nvim)

A fuzzy finder written in lua
![CMP](/img/preview/telescope.png)

`leader` `f` `f`

## [`nvim-tree.lua`](https://github.com/kyazdani42/nvim-tree.lua)

A file explorer tree for neovim written in lua
<h3 align="left">

![Nvim tree](/img/nvim-tree.png)

</h3>

`leader` `e`

## [`Treesitter`](https://github.com/nvim-treesitter/nvim-treesitter)

Syntax highlighting engine
![Treesitter](/img/treesitter.png)
left `on` right `off`


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
These were ran buy `hyperfine`

## UI

Nvoid has all its UI plugins baked in, from the themes to the statusline and the bufferline


### Themes
you can find all the builtin themes at [The Showcase](/sc#themes)

### Statusline

Nvoid comes with 3 statusline styles (`nvoid`, `minimal`, `evil`) and the ability to create your own

you can see these styles at [The Showcase](/sc#statusline)
