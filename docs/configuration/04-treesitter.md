# Treesitter
## Adding a new treesitter language  
you can add a new language by
```vim
:TSInstall <Name of language>
```
or add this in the `config.lua`
```lua
nvoid.builtin.treesitter.ensure_installed = {
  "bash",
  "c",
  "javascript",
  "json",
  "lua",
  "python",
  "typescript",
  "tsx",
  "css",
  "rust",
  "java",
  "yaml",
}

nvoid.builtin.treesitter.ignore_install = { "haskell" }
nvoid.builtin.treesitter.highlight.enabled = true
```
