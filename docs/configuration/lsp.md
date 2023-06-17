---
sidebar_position: 5
---

# Lsp
## Lsp Settings

```lua
vim.diagnostic.config({ settings })
```
or
```lua
nvoid.lsp.....
```

## Adding language sever protocol
you can add a new language by
```vim
:Mason
```
then press `i` on the language you want to install

or add this in the `config.lua`
```lua
nvoid.lsp.installer.setup.ensure_installed = { "server name" }
```
by default nvoid ships with lua_ls
### Setting up servers
```lua
vim.list_extend(nvoid.lsp.automatic_configuration.skipped_servers, { "server name"} )
require("server name").setup {settings}
```

## Linters and Formatters

The easiest way is to reference the linter/formatter/code_actions by their names. See the null-ls docs for a full list of builtins with their names.

### Installing linters and formatters
Using the `:Mason` command you install most formatters and linters

### Setting formatters and linters

```lua
local formatters = require "nvoid.lsp.null-ls.formatters"
formatters.setup {
   { 
     name = "formatter name" 
     args = "formatter args" 
     filetypes = "filetype" 
   }
}
```
