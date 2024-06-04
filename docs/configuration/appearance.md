---
sidebar_position: 4
---

# Appearance
## Colorscheme / Transparency
Nvoid comes with 21 themes provided form [nvoid-base16](https://github.com/nvoid-lua/base16) which's based on [Nvchad's base46](https://github.com/NvChad/base46).

You can change theme and toggle transparency with:
```lua
nvoid.ui.Colorscheme = "theme"
nvoid.ui.transparency = false -- true
```
also you can open `Telescope themes` by hitting `leader` `f` `c` to preview the themes.

- Nvoid comes with 21 [themes](/docs/features/ui#themes).

:::note
- If `nvoid.ui.Colorscheme = "theme"` in located in the your `config.lua` you can change it with Telescope.
- Also if you enable the nvoid autoreload config function the theme change without needing to restart.
:::

### Highlights
you can add your own highlights:
```lua
nvoid.ui.hl_add = {
    hlname = {fg = "color", bg = "color"}
}
```
or
you can override highlights:
```lua
nvoid.ui.hl_override = {
    hlname = {fg = "color", bg = "color"}
}
```

### Add Colorschemes
you can add colorschemes at `~/.config/nvoid/lua/themes/` and any colorscheme you add will show on the `Telescope themes`
the file should look like this 
```lua
local M = {}

M.base_30 = {
	white = "#hexcode",
	darker_black = "#hexcode",
	black = "#hexcode", --  nvim bg
	black2 = "#hexcode",
	one_bg = "#hexcode",
	one_bg2 = "#hexcode", -- StatusBar (filename)
	one_bg3 = "#hexcode",
	grey = "#hexcode", -- Line numbers (shouldn't be base01?)
	grey_fg = "#hexcode", -- Why this affects comments?
	grey_fg2 = "#hexcode",
	light_grey = "#hexcode",
	red = "#hexcode", -- StatusBar (username)
	baby_pink = "#hexcode",
	pink = "#hexcode",
	line = "#hexcode", -- for lines like vertsplit
	green = "#hexcode", -- StatusBar (file percentage)
	vibrant_green = "#hexcode",
	nord_blue = "#hexcode", -- Mode indicator
	blue = "#hexcode",
	yellow = "#hexcode",
	sun = "#hexcode",
	purple = "#hexcode",
	dark_purple = "#hexcode",
	teal = "#hexcode",
	orange = "#hexcode",
	cyan = "#hexcode",
	statusline_bg = "#hexcode",
	lightbg = "#hexcode",
	pmenu_bg = "#hexcode", -- Command bar suggestions
	folder_bg = "#hexcode",
}

M.base_16 = {
	base00 = "#hexcode", -- Default bg
	base01 = "#hexcode", -- Lighter bg (status bar, line number, folding mks)
	base02 = "#hexcode", -- Selection bg
	base03 = "#hexcode", -- Comments, invisibles, line hl
	base04 = "#hexcode", -- Dark fg (status bars)
	base05 = "#hexcode", -- Default fg (caret, delimiters, Operators)
	base06 = "#hexcode", -- Light fg (not often used)
	base07 = "#hexcode", -- Light bg (not often used)
	base08 = "#hexcode", -- Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
	base09 = "#hexcode", -- Integers, Boolean, Constants, XML Attributes, Markup Link Url
	base0A = "#hexcode", -- Classes, Markup Bold, Search Text Background
	base0B = "#hexcode", -- Strings, Inherited Class, Markup Code, Diff Inserted
	base0C = "#hexcode", -- Support, regex, escape chars
	base0D = "#hexcode", -- Function, methods, headings
	base0E = "#hexcode", -- Keywords
	base0F = "#hexcode", -- Deprecated, open/close embedded tags
}

M.type = "dark" -- or light

return M
```
You can find more colorschemes at [NvChad/base46](https://github.com/NvChad/base46/tree/v2.5/lua/base46/themes)


## Statusline
Nvoid use it's own statusline with 3 styles [(nvoid, minimal, evil)](/docs/features/ui#statusline) you can change them with:
```lua
nvoid.ui.statusline.style = "style"
```
or you can disable it with:
```lua
nvoid.ui.statusline.enabled = true -- False
```
or create your own styel with:

```lua
nvoid.ui.statusline.config = "%!v:lua.require('path.to.config')"
```
:::note
you can find a custom style at [my github](https://github.com/ysfgrgO7/nvoid/tree/main/lua/ysf/ui/statusline.lua).
:::

## Bufferline & winbar
### Bufferline
- The bufferline is disabled by default you can enable it with;
```lua
nvoid.builtin.bufferline.active = true
```

### Winbar
- Winbar is enabled by default you can disable it with:
```
nvoid.builtin.winbar.active = false
```

:::note
winbar uses navic which really slows up the config.
:::
