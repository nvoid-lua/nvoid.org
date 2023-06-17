---
sidebar_position: 2
---

# Keys 

## Leader Keys

You can change the leader for nvoid through
```lua
nvoid.leader = "space"
```

You can add, override, or disable leader commands with :
```lua
-- one bind mapping
nvoid.builtin.which_key.mappings["Key"] = { "<cmd><The command to run>", "Name" }, 

-- one bind group
nvoid.builtin.which_key.mappings["key"] = {
  name = "+Name",
  key = { "<cmd>Command<cr>", "Name" },
}
```

for example, lets add a keybinding to remove all search highloghts
```lua
nvoid.builtin.which_key.mappings["h"] = { "<cmd>nohlsearch<CR>", " No Highlight" }
```

## Normal keys

You can add, override, or disable keybinds with :
```lua
nvoid.keys......
```

for example, let's make a bind to select and copy all contents of a file
```lua
nvoid.keys.normal_mode["<C-a>"] = "gg<S-v>G y"
```
