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
