# Plugins

You can add new plugin by adding that to the `nvoidrc.lua`
```lua
M.plugins_add = {
	{
		"username-orgnization/repo name",
		config = function()
			require("custom.<lua path to the config>")
		end,
	},
}
```

for example add this:
``` lua
M.plugins_add = {

	-- ZenMode
	{
		"folke/zen-mode.nvim",
		config = function()
			require("custom.config.focus").zen()
		end,
	},

	-- Twilight
	{
		"folke/twilight.nvim",
		config = function()
			require("custom.config.focus").twilight()
		end,
	},
}
```
then run this in to your shell
```sh
mkdir ~/.config/nvim/lua/custom/config/
touch ~/.config/nvim/lua/custom/config/focus.lua
nvim ~/.config/nvim/lua/custom/config/focus.lua
```
there will be some errors so copy this into the current file
```lua
local M = {}

-- Zen
M.zen = function()
	require("zen-mode").setup({
		window = {
			backdrop = 0.95,
			width = 100,
			height = 0.8,
			options = { signcolumn = "no", number = false, cursorline = true },
		},
		plugins = {
			options = { enabled = true, ruler = false, showcmd = false },
			twilight = { enabled = true },
			gitsigns = { enabled = false },
			tmux = { enabled = false },
		},
		on_open = function(_)
			vim.cmd(":TwilightEnable")
		end,
	})
end

-- Twilight
M.twilight = function()
	require("twilight").setup({
		{
			dimming = { alpha = 0.25, color = { "Normal", "#ffffff" }, inactive = true },
			context = 10,
			treesitter = true,
			expand = { "function", "method", "table", "if_statement" },
		},
	})
end

return M
```

Then run `Packer Sync` in neovim or hit `space` `p` `s`
