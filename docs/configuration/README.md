# Configuration

You can configure Nvoid by using the configuration file located in `~/.config/nvim/lua/custom/nvoidrc.lua`

First run that in the terminal

```bash
mkdir ~/.config/nvim/lua/custom/
cd ~/.config/nvim/lua/custom
cp -r ~/.config/nvim/example/example_nvoidrc.lua ~/.config/nvim/lua/custom/nvoidrc.lua
```

then as you go on you will add the config between
```lua
local M = {}
M.<CONFIG>
return M
```
