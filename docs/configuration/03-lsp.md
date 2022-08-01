# Lsp
## Lsp Settings
```lua
M.lsp = {
  document_highlight = true,
  autoforamt = false,
}
```
Document Highlight is the function that highlights the repeated variable
Autoforamt Formats the document on save

## Adding language sever protocol
you can add a new language by
```vim
:LspInstall <Name of language>
```
or add this in the `nvoidrc.lua`
```lua
M.lsp_add = {
  "<Name of language>",
}
```
by default nvoid ships with sumneko_lua

## Formaters
- for `lua` you can use `stylua`
- for `python` you can use `black`
- for the web dev you can use `prettier`
