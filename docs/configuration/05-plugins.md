# Plugins

You can add new plugin by adding that to the `nvoidrc.lua`
```lua
nvoid.plugins = { "username/repo" }
```

for example add this:
``` lua
nvoid.plugins = {
  {
    "folke/zen-mode.nvim",
    config = function()
      require("zen-mode").setup() {
        window = {
          backdrop = 0.95,
          width = 120,
          height = 1,
          options = {
          },
        },
        plugins = {
          options = {
            enabled = true,
            ruler = false,
            showcmd = false,
          },
          twilight = { enabled = true },
          gitsigns = { enabled = false },
          tmux = { enabled = false },
          kitty = {
            enabled = false,
            font = "+4",
          },
        }
      }
    end,
  },
}

```
Then run `Packer Sync` in nvoid or hit `space` `p` `s`


You can also configure some plugin options in nvoid through
```lua
nvoid.builtin.[plugin name] = ...
```
