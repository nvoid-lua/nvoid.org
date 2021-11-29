# Colorscheme

## Switching colors

To switch color schemes on the fly, type the following command:

```vim
:Telescope colorscheme
```

You can also press `Space` `f` `c` to cycle through colorschemes with a preview.

To change the color scheme permanently, modify `nv-config.lua`

```lua
M.ui = {
  theme = 'doom-one',   -- 'onedarker' 'gruvbox' 'dracula' 'doom-one' 'tokyonight' 'nord'
}
```

## Installing colorschemes

You can add any colorscheme you like. Just add a plugin with the colorscheme of your choice. For more information on installing plugins [look here. ](../plugins/README.md)

[This is a list](https://github.com/rockerBOO/awesome-neovim#colorscheme) of colorschemes with tree-sitter support

## Transparent Windows

If you're using transparent windows enable this setting

```lua
M.ui = {
  transparent_background = 'false',
}
```
That enables the following settings

```lua
cmd "au ColorScheme * hi Normal ctermbg=none guibg=none"
cmd "au ColorScheme * hi SignColumn ctermbg=none guibg=none"
cmd "au ColorScheme * hi NormalNC ctermbg=none guibg=none"
cmd "au ColorScheme * hi MsgArea ctermbg=none guibg=none"
cmd "au ColorScheme * hi TelescopeBorder ctermbg=none guibg=none"
cmd "au ColorScheme * hi NvimTreeNormal ctermbg=none guibg=none"
cmd "let &fcs='eob: '"
```
