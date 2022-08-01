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
