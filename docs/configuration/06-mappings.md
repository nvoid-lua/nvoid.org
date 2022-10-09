# Keys 

You can change the leader for nvoid through
```lua
nvoid.leader = "space"
```

You can add new leader command (New keybind) by adding that to the `nvoidrc.lua`
```lua
nvoid.builtin.which_key.mappings["Key"] = { "<cmd><The command to run>", "Name" }, 

nvoid.builtin.which_key.mappings["key"] = {
  name = "+Name",
  key = { "<cmd>Command<cr>", "Name" },
}
```

for example lets add a keybinding for zen mode we added earlier: 
```lua
nvoid.builtin.which_key.mappings["z"] = { "<cmd>ZenMode<cr>", "ZenMode" }
```
