---
sidebar_position: 6
---

# Commands
## Autocmds
you can autocommands with:
```lua
nvoid.autocommands = {
    {
        "autocmd events",
        { 
            pattern = { "pattern" },
            command = "vimscpript",
        }
    },
}
```

You can also add lua callbacks

```lua
nvoid.autocommands = {
    {
      "autocmd events", {
      pattern = {"pattern" },
      callback = function()
        -- lua function
      end
    },
  }
}
```
## Custom Commands

| Command                    | Description                             |
|----------------------------|-----------------------------------------|
| `NvoidCacheReset`          | clearing any outdated settings          |
| `NvoidDiagnostics`         | show LSP diagnostics                    |
| `NvoidDocs`                | Open [nvoid.org](https://nvoid.org)     |
| `NvoidInfo`                | Opens Info window                       |
| `NvoidOpenlog`             | Opens nvoid log(errors)                 |
| `NvoidReload`              | Reloads `config.lua`                    |
| `NvoidSyncCorePlugins`     | Syncs core plugins                      |
| `NvoidToggleFormatOnSave`  | turn format on save on/off              |
| `NvoidUpdate`              | Updates nvoid                           |
