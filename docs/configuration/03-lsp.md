# Lsp
## Adding language sever protocol
you can add a new language by
```vim
:LspInstall <Name of language>
```
or add this in the `nvoidrc.lua`
```lua
M.lsp = {
  "<Name of language>",
}
```
by default nvoid ships with sumneko_lua

## Formaters
- for `lua` you can use `stylua`
- for `python` you can use `black`
- for the web dev you can use `prettier`
