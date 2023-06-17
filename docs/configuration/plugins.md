---
sidebar_position: 3
---

# Plugins
## Core plugins
To configure core plugin you use `nvoid.builtin.[plugin name]`
### Disabling core plugins
```lua
nvoid.builtin.[plugin name].active = false
```


:::note

Disabling plugins won't take effect untill you restart nvoid.

:::


### Configuring core plugins

To configure a builtin plugin, edit options in `nvoid.builtin.<core plugins>`. You can press `<TAB>` to go through seetings

For example, let's enable cmdline for cmp:
```lua
nvoid.builtin.cmp.cmdline.enable = true
```

## User plugins
### Adding plugins
```lua
nvoid.plugins = { "username/repo" }
```

for example, let's add and configure zen-mode for neovim: 
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
      nvoid.builtin.which_key.mappings["z"] = { "<cmd>ZenMode<cr>", "ZenMode" }
    end,
  },
}

```
