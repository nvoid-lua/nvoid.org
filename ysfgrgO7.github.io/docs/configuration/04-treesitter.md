# Treesitter
## Adding a new treesitter language  
you can add a new language by
```vim
:TSInstall <Name of language>
```
or add this in the `nvoidrc.lua`
```lua
M.ts_installed = {
  "<Name of language>",
}
```
by default nvoid ships with :
```
 bash
 lua
 c
 cpp
 css
 javascript
 json
 yaml
 python
```
