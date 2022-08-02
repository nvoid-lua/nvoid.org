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

# Adding new formatting/diagnostics

you can add extra formatters/linters via null_ls

in the `nvoidrc.lua`

```lua
require "custom.null_ls"
```


in the `custom/null_ls.lua`

```lua
local null_ls_status_ok, null_ls = pcall(require, "null-ls")
if not null_ls_status_ok then
  return
end
local formatting = null_ls.builtins.formatting
local diagnostics = null_ls.builtins.diagnostics

null_ls.setup {
  sources = {....}, -- formatting.(....).with {....}
}
```
