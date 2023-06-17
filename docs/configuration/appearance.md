---
sidebar_position: 4
---

# Appearance
## Colorscheme
<!-- Nvoid comes with 21 themes provided form [nvoid-base16]("https://github.com/nvoid-lua/base16") which's inspired by [Nvchad-base46]("https://github.com/NvChad/base46") -->

You can change theme with:
```lua
nvoid.ui.Colorscheme = "theme"
```
the 21 themes are 
```
aquarium
ashes
catppuccin
decay
doom
dracula
github_dark
github_light
gruvbox
gruvbox_light
gruvdark
nightfox
nord
one_light
onedark
pastelDark
radium
solarized_dark
tokyodark
tokyonight
vscode_dark
```
also you can turn transparency on/off by `nvoid.ui.transparency = true -- true | false`

## Statusline
Nvoid use it's own statusline with 3 styles (nvoid, minimal, evil) you can change them with:
```lua
nvoid.ui.statusline.style = "style"
```
or you can disable it with:
```lua
nvoid.ui.statusline.enabled = true -- False
```
or create your own styel with

```lua
nvoid.ui.statusline.config = "%!v:lua.require('path.to.config')"
```
<!-- :::note -->
<!-- you can find a custom style at [my github]("https://github.com/ysfgrgO7/nvoid/tree/main/lua/statusline") -->
<!-- ::: -->
