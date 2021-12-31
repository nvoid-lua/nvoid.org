# Colorscheme

## Switching colors

To switch color schemes on the fly, type the following command:

```vim
:Telescope colorscheme
```

You can also press `Space` `f` `c` to cycle through colorschemes with a preview.

To change the color scheme permanently, modify `nvoidrc.lua`

```lua
M.ui = {
  theme = 'doom-one',   -- 'onedarker' 'gruvbox' 'dracula' 'doom-one' 'tokyonight' 'nord'
}
```

## Installing colorschemes

[This is a list](https://github.com/rockerBOO/awesome-neovim#colorscheme) of colorschemes with tree-sitter support

## Transparent Windows

If you're using transparent windows enable this setting

```lua
M.ui = {
  transparency = false,
}
```
That enables the following settings

```lua
local fg = require("nvoid.core.utils").fg
local bg = require("nvoid.core.utils").bg
local grey = colors.grey

if config.ui.transparency then
   bg("Normal", "NONE")
   bg("Folded", "NONE")
   fg("Folded", "NONE")
   fg("Comment", grey)
end
```
