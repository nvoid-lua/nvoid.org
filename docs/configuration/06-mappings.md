# Adding New Key mapping

You can add new leader command (New keybind) by adding that to the `nvoidrc.lua`
```lua
M.whichkey_add = {
   ["<The Key>"] = { "<cmd><The command to run>", "Name" }, 
   "<The Key Group Name>" = {
     name = "<Name of the group>",
     <Key> = { "<cmd><The command to run>", "Name" }, 
   },
}
```

for example lets add a keybinding for zen mode we added earlier: 
```lua
M.whichkey_add = {
	z = {
		name = "Zen",
		z = { "<cmd>ZenMode<cr>", "ZenMode" },
		t = { "<cmd>Twilight<cr>", "Twilight" },
	},
}
```
