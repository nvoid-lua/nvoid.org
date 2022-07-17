# Configuration

You can configure Nvoid by using the configuration file located in `~/.config/nvim/lua/custom/nvoidrc.lua`

First run that in the terminal

```bash
cd ~/.config/nvim/lua/
cp -r ../example ./custom 
```

then as you go on you will add the config between
```lua
local M = {}
M.<CONFIG>
return M
```
