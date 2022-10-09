# Lsp
## Lsp Settings
```lua
-- enable/disable document highlight
nvoid.lsp.document_highlight = true
-- enable/disable virtual text
nvoid.lsp.diagnostics.virtual_text = false
-- enable/disable format on save
nvoid.lsp.format_on_save = true
```

## Adding language sever protocol
you can add a new language by
```vim
:Mason
```
then press `i` on the language you want to install

or add this in the `config.lua`
```lua
nvoid.lsp.installer.setup.ensure_installed = { "clangd" }
```
by default nvoid ships with sumneko_lua

## Formaters
- for `lua` you can use `stylua`
- for `python` you can use `black`
- for the web dev you can use `prettier`

## Adding new formatting/diagnostics

```lua
nvoid.lsp.format_on_save = false
nvoid.lsp.diagnostics.virtual_text = false
nvoid.lsp.document_highlight = true
```
