---
sidebar_position: 3
---

# 示例配置

每个与Neovim兼容的插件都与LunarVim兼容，这里有一些示例可以帮助您入门。

## Navigation plugins

### [hop](https://github.com/phaazon/hop.nvim)

**neovim motions on speed!**

```lua
{
  "phaazon/hop.nvim",
  event = "BufRead",
  config = function()
    require("hop").setup()
    vim.api.nvim_set_keymap("n", "s", ":HopChar2<cr>", { silent = true })
    vim.api.nvim_set_keymap("n", "S", ":HopWord<cr>", { silent = true })
  end,
},
```

### [lightspeed](https://github.com/ggandor/lightspeed.nvim)

**jetpack codebase navigation**

```lua
{
  "ggandor/lightspeed.nvim",
  event = "BufRead",
},
```

### [minimap](https://github.com/wfxr/minimap.vim)

**blazing fast minimap/scrollbar written in Rust**

```lua
{
  'wfxr/minimap.vim',
  build = "cargo install --locked code-minimap",
  -- cmd = {"Minimap", "MinimapClose", "MinimapToggle", "MinimapRefresh", "MinimapUpdateHighlight"},
  config = function ()
    vim.cmd ("let g:minimap_width = 10")
    vim.cmd ("let g:minimap_auto_start = 1")
    vim.cmd ("let g:minimap_auto_start_win_enter = 1")
  end,
},
```

### [numb](https://github.com/nacro90/numb.nvim)

**jump to the line**

```lua
{
  "nacro90/numb.nvim",
  event = "BufRead",
  config = function()
  require("numb").setup {
    show_numbers = true, -- Enable 'number' for the window while peeking
    show_cursorline = true, -- Enable 'cursorline' for the window while peeking
  }
  end,
},
```

### [nvim-bqf](https://github.com/kevinhwang91/nvim-bqf)

**better quickfix window**

```lua
{
  "kevinhwang91/nvim-bqf",
  event = { "BufRead", "BufNew" },
  config = function()
  require("bqf").setup({
          auto_enable = true,
          preview = {
          win_height = 12,
          win_vheight = 12,
          delay_syntax = 80,
          border_chars = { "┃", "┃", "━", "━", "┏", "┓", "┗", "┛", "█" },
          },
          func_map = {
          vsplit = "",
          ptogglemode = "z,",
          stoggleup = "",
          },
          filter = {
          fzf = {
          action_for = { ["ctrl-s"] = "split" },
          extra_opts = { "--bind", "ctrl-o:toggle-all", "--prompt", "> " },
          },
          },
          })
  end,
},
```

### [nvim-spectre](https://github.com/windwp/nvim-spectre)

**search and replace**

```lua
{
  "windwp/nvim-spectre",
  event = "BufRead",
  config = function()
    require("spectre").setup()
  end,
},
```

### [rnvimr](https://github.com/kevinhwang91/rnvimr)

**ranger file explorer window**

```lua
{
  "kevinhwang91/rnvimr",
    cmd = "RnvimrToggle",
    config = function()
      vim.g.rnvimr_draw_border = 1
      vim.g.rnvimr_pick_enable = 1
      vim.g.rnvimr_bw_enable = 1
      end,
},
```

### [snap](https://github.com/camspiers/snap)

**fast finder system**

```lua
{
  "camspiers/snap",
  rocks = "fzy",
  config = function()
    local snap = require "snap"
    local layout = snap.get("layout").bottom
    local file = snap.config.file:with { consumer = "fzy", layout = layout }
    local vimgrep = snap.config.vimgrep:with { layout = layout }
    snap.register.command("find_files", file { producer = "ripgrep.file" })
    snap.register.command("buffers", file { producer = "vim.buffer" })
    snap.register.command("oldfiles", file { producer = "vim.oldfile" })
    snap.register.command("live_grep", vimgrep {})
  end,
},
```

### [vim-matchup](https://github.com/andymass/vim-matchup)

**navigate and highlight matching words**

```lua
{
  "andymass/vim-matchup",
  event = "CursorMoved",
  config = function()
    vim.g.matchup_matchparen_offscreen = { method = "popup" }
  end,
},

-- enable treesitter integration
lvim.builtin.treesitter.matchup.enable = true
```

### [nvim-window-picker](https://github.com/s1n7ax/nvim-window-picker)

**jump to any window using a selector like the one nvim-tree uses**

```lua
{
      "s1n7ax/nvim-window-picker",
      version = "1.*",
      config = function()
        require("window-picker").setup({
          autoselect_one = true,
          include_current = false,
          filter_rules = {
            -- filter using buffer options
            bo = {
              -- if the file type is one of following, the window will be ignored
              filetype = { "neo-tree", "neo-tree-popup", "notify", "quickfix" },

              -- if the buffer type is one of following, the window will be ignored
              buftype = { "terminal" },
            },
          },
          other_win_hl_color = "#e35e4f",
        })
      end,
 }

-- example mappings you can place in some other place
-- An awesome method to jump to windows
local picker = require('window-picker')

vim.keymap.set("n", ",w", function()
  local picked_window_id = picker.pick_window({
    include_current_win = true
  }) or vim.api.nvim_get_current_win()
  vim.api.nvim_set_current_win(picked_window_id)
end, { desc = "Pick a window" })

-- Swap two windows using the awesome window picker
local function swap_windows()
  local window = picker.pick_window({
    include_current_win = false
  })
  local target_buffer = vim.fn.winbufnr(window)
  -- Set the target window to contain current buffer
  vim.api.nvim_win_set_buf(window, 0)
  -- Set current window to contain target buffer
  vim.api.nvim_win_set_buf(0, target_buffer)
end

vim.keymap.set('n', ',W', swap_windows, { desc = 'Swap windows' })

```

## Git

### [diffview](https://github.com/sindrets/diffview.nvim)

**git diff in a single tabpage**

```lua
{
  "sindrets/diffview.nvim",
  event = "BufRead",
},
```

### [git-blame](https://github.com/f-person/git-blame.nvim)

**show git blame**

```lua
{
  "f-person/git-blame.nvim",
  event = "BufRead",
  config = function()
    vim.cmd "highlight default link gitblame SpecialComment"
    vim.g.gitblame_enabled = 0
  end,
},
```

### [gitlinker](https://github.com/ruifm/gitlinker.nvim)

**generate shareable file permalinks for several git web frontend hosts**

```lua
{
  "ruifm/gitlinker.nvim",
  event = "BufRead",
  config = function()
  require("gitlinker").setup {
        opts = {
          -- remote = 'github', -- force the use of a specific remote
            -- adds current line nr in the url for normal mode
            add_current_line_on_normal_mode = true,
          -- callback for what to do with the url
            action_callback = require("gitlinker.actions").open_in_browser,
          -- print the url after performing the action
            print_url = false,
          -- mapping to call url generation
            mappings = "<leader>gy",
        },
      }
  end,
  dependencies = "nvim-lua/plenary.nvim",
},
```

### [octo](https://github.com/pwntester/octo.nvim)

**edit and review GitHub issues and pull requests**

```lua
{
  "pwntester/octo.nvim",
  dependencies = {
    'nvim-lua/plenary.nvim',
    'nvim-telescope/telescope.nvim',
    'nvim-tree/nvim-web-devicons',
  },
  config = function()
    require("octo").setup()
  end,
},
```

### [vim-fugitive](https://github.com/tpope/vim-fugitive)

**git wrapper**

```lua
{
  "tpope/vim-fugitive",
  cmd = {
    "G",
    "Git",
    "Gdiffsplit",
    "Gread",
    "Gwrite",
    "Ggrep",
    "GMove",
    "GDelete",
    "GBrowse",
    "GRemove",
    "GRename",
    "Glgrep",
    "Gedit"
  },
  ft = {"fugitive"}
},
```

### [vim-gist](https://github.com/mattn/vim-gist)

**create/edit Github gists**

```lua
{
  "mattn/vim-gist",
  event = "BufRead",
  dependencies = "mattn/webapi-vim",
},
```

## Treesitter

### [nvim-ts-autotag](https://github.com/windwp/nvim-ts-autotag)

**autoclose and autorename html tag**

```lua
{
  "windwp/nvim-ts-autotag",
  config = function()
    require("nvim-ts-autotag").setup()
  end,
},
```

### [nvim-ts-context-commentstring](https://github.com/JoosepAlviste/nvim-ts-context-commentstring)

**commentstring option based on the cursor location**

```lua
{
  "JoosepAlviste/nvim-ts-context-commentstring",
  event = "BufRead",
},
```

### [nvim-ts-rainbow](https://github.com/p00f/nvim-ts-rainbow)

**rainbow parentheses**

```lua
{
  "p00f/nvim-ts-rainbow",
},
```

After installing ensure to enable it in your `config.lua` using:

```
...
lvim.builtin.treesitter.rainbow.enable = true
...
```

### [playground](https://github.com/nvim-treesitter/playground)

**view treesitter information**

```lua
{
  "nvim-treesitter/playground",
  event = "BufRead",
},
```

### [nvim-treesitter-context](https://github.com/romgrk/nvim-treesitter-context)

**Show current function at the top of the screen when function does not fit in screen**

```lua
{
    "romgrk/nvim-treesitter-context",
    config = function()
      require("treesitter-context").setup{
        enable = true, -- Enable this plugin (Can be enabled/disabled later via commands)
        throttle = true, -- Throttles plugin updates (may improve performance)
        max_lines = 0, -- How many lines the window should span. Values <= 0 mean no limit.
        patterns = { -- Match patterns for TS nodes. These get wrapped to match at word boundaries.
          -- For all filetypes
          -- Note that setting an entry here replaces all other patterns for this entry.
          -- By setting the 'default' entry below, you can control which nodes you want to
          -- appear in the context window.
          default = {
            'class',
            'function',
            'method',
          },
        },
      }
    end
  },
```

## Telescope Extensions

### How to install telescope extensions

First **add your telescope extension to the list of plugins** as usual (`lvim.plugins = { ... }`) following the extension instructions.
There are several ways to register extensions within telescope, but the safer is using the `on_config_done` callback for telescope.
Create the callback function anywhere in your `config.lua`. This function will be called when telescope has finished loading and will get telescope as its only parameter.
Finally, within the `on_config_done` callback register your extension :

```lua
lvim.builtin.telescope.on_config_done = function(telescope)
  pcall(telescope.load_extension, "frecency")
  pcall(telescope.load_extension, "neoclip")
  -- any other extensions loading
end
```

### [telescope-fzy-native.nvim](https://github.com/nvim-telescope/telescope-fzy-native.nvim)

**fzy style sorter that is compiled**

```lua
{
  "nvim-telescope/telescope-fzy-native.nvim",
  build = "make",
  event = "BufRead",
},
```

### [telescope-project](https://github.com/nvim-telescope/telescope-project.nvim)

**switch between projects**

```lua
{
  "nvim-telescope/telescope-project.nvim",
  event = "BufWinEnter",
  setup = function()
    vim.cmd [[packadd telescope.nvim]]
  end,
},
```

## Colorschemes

### [lsp-colors](https://github.com/folke/lsp-colors.nvim)

**lsp diagnostics highlight groups for non lsp colorschemes**

```lua
{
  "folke/lsp-colors.nvim",
  event = "BufRead",
},
```

### [lush.nvim](https://github.com/rktjmp/lush.nvim)

**colorscheme creation aid**

```lua
{
  "rktjmp/lush.nvim",
},
```

### [nvim-colorizer](https://github.com/norcalli/nvim-colorizer.lua)

**color highlighter**

```lua
{
  "norcalli/nvim-colorizer.lua",
    config = function()
      require("colorizer").setup({ "css", "scss", "html", "javascript" }, {
          RGB = true, -- #RGB hex codes
          RRGGBB = true, -- #RRGGBB hex codes
          RRGGBBAA = true, -- #RRGGBBAA hex codes
          rgb_fn = true, -- CSS rgb() and rgba() functions
          hsl_fn = true, -- CSS hsl() and hsla() functions
          css = true, -- Enable all CSS features: rgb_fn, hsl_fn, names, RGB, RRGGBB
          css_fn = true, -- Enable all CSS *functions*: rgb_fn, hsl_fn
          })
  end,
},
```

## LSP Enhancement

### [cmp-tabnine](https://github.com/tzachar/cmp-tabnine)

**TabNine completion engine for hrsh7th/nvim-cmp**

```lua
{
  "tzachar/cmp-tabnine",
  build = "./install.sh",
  dependencies = "hrsh7th/nvim-cmp",
  event = "InsertEnter",
},
```

### [goto-preview](https://github.com/rmagatti/goto-preview)

**previewing goto definition calls**

```lua
{
  "rmagatti/goto-preview",
  config = function()
  require('goto-preview').setup {
        width = 120; -- Width of the floating window
        height = 25; -- Height of the floating window
        default_mappings = false; -- Bind default mappings
        debug = false; -- Print debug information
        opacity = nil; -- 0-100 opacity level of the floating window where 100 is fully transparent.
        post_open_hook = nil -- A function taking two arguments, a buffer and a window to be ran as a hook.
        -- You can use "default_mappings = true" setup option
        -- Or explicitly set keybindings
        -- vim.cmd("nnoremap gpd <cmd>lua require('goto-preview').goto_preview_definition()<CR>")
        -- vim.cmd("nnoremap gpi <cmd>lua require('goto-preview').goto_preview_implementation()<CR>")
        -- vim.cmd("nnoremap gP <cmd>lua require('goto-preview').close_all_win()<CR>")
    }
  end
},
```

### [lsp-rooter](https://github.com/ahmedkhalf/lsp-rooter.nvim)

**cwd to the project's root directory**

```lua
{
  "ahmedkhalf/lsp-rooter.nvim",
  event = "BufRead",
  config = function()
    require("lsp-rooter").setup()
  end,
},
```

### [lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim)

**hint when you type**

```lua
{
  "ray-x/lsp_signature.nvim",
  event = "BufRead",
  config = function() require"lsp_signature".on_attach() end,
},
```

### [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim)

**a tree like view for symbols**

```lua
{
  "simrat39/symbols-outline.nvim",
  config = function()
    require('symbols-outline').setup()
  end
},
```

### [trouble.nvim](https://github.com/folke/trouble.nvim)

**diagnostics, references, telescope results, quickfix and location lists**

```lua
{
  "folke/trouble.nvim",
    cmd = "TroubleToggle",
},
```

Also define keybindings in `config.lua`

```lua
lvim.builtin.which_key.mappings["t"] = {
  name = "Diagnostics",
  t = { "<cmd>TroubleToggle<cr>", "trouble" },
  w = { "<cmd>TroubleToggle workspace_diagnostics<cr>", "workspace" },
  d = { "<cmd>TroubleToggle document_diagnostics<cr>", "document" },
  q = { "<cmd>TroubleToggle quickfix<cr>", "quickfix" },
  l = { "<cmd>TroubleToggle loclist<cr>", "loclist" },
  r = { "<cmd>TroubleToggle lsp_references<cr>", "references" },
},
```

## General

### [auto-save](https://github.com/Pocco81/auto-save.nvim)

**automatically saving your work whenever you make changes to it**

```lua
{
  "Pocco81/auto-save.nvim",
  config = function()
    require("auto-save").setup()
  end,
},
```

### [codi.vim](https://github.com/metakirby5/codi.vim)

**interactive scratchpad for hackers**

```lua
{
  "metakirby5/codi.vim",
  cmd = "Codi",
},
```

### [copilot.lua](https://github.com/zbirenbaum/copilot.lua) and [copilot-cmp](https://github.com/zbirenbaum/copilot-cmp)

**your AI pair programmer**

```lua
table.insert(lvim.plugins, {
  "zbirenbaum/copilot-cmp",
  event = "InsertEnter",
  dependencies = { "zbirenbaum/copilot.lua" },
  config = function()
    vim.defer_fn(function()
      require("copilot").setup() -- https://github.com/zbirenbaum/copilot.lua/blob/master/README.md#setup-and-configuration
      require("copilot_cmp").setup() -- https://github.com/zbirenbaum/copilot-cmp/blob/master/README.md#configuration
    end, 100)
  end,
})
```

Make sure to run `:Lazy load copilot-cmp` followed by `:Copilot auth` once the plugin is installed to start the authentication process.

### [dial.nvim](https://github.com/monaqa/dial.nvim)

**extended incrementing/decrementing**

```lua
{
  "monaqa/dial.nvim",
  event = "BufRead",
  config = function()
    local dial = require "dial"
    vim.cmd [[
    nmap <C-a> <Plug>(dial-increment)
      nmap <C-x> <Plug>(dial-decrement)
      vmap <C-a> <Plug>(dial-increment)
      vmap <C-x> <Plug>(dial-decrement)
      vmap g<C-a> <Plug>(dial-increment-additional)
      vmap g<C-x> <Plug>(dial-decrement-additional)
    ]]

    dial.augends["custom#boolean"] = dial.common.enum_cyclic {
      name = "boolean",
      strlist = { "true", "false" },
    }
    table.insert(dial.config.searchlist.normal, "custom#boolean")

    -- For Languages which prefer True/False, e.g. python.
    dial.augends["custom#Boolean"] = dial.common.enum_cyclic {
      name = "Boolean",
      strlist = { "True", "False" },
    }
    table.insert(dial.config.searchlist.normal, "custom#Boolean")
  end,
},

```

### [glow.nvim](https://github.com/npxbr/glow.nvim)

**preview markdown in neovim**

```lua
-- You must install glow globally
-- https://github.com/charmbracelet/glow
-- yay -S glow
{
  "npxbr/glow.nvim",
  ft = {"markdown"}
  -- build = "yay -S glow"
},
```

### [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim)

**preview markdown in the browser**

```lua
{
  "iamcco/markdown-preview.nvim",
  build = "cd app && npm install",
  ft = "markdown",
  config = function()
    vim.g.mkdp_auto_start = 1
  end,
},
```

### [neoscroll](https://github.com/karb94/neoscroll.nvim)

**smooth scrolling**

```lua
{
  "karb94/neoscroll.nvim",
  event = "WinScrolled",
  config = function()
  require('neoscroll').setup({
        -- All these keys will be mapped to their corresponding default scrolling animation
        mappings = {'<C-u>', '<C-d>', '<C-b>', '<C-f>',
        '<C-y>', '<C-e>', 'zt', 'zz', 'zb'},
        hide_cursor = true,          -- Hide cursor while scrolling
        stop_eof = true,             -- Stop at <EOF> when scrolling downwards
        use_local_scrolloff = false, -- Use the local scope of scrolloff instead of the global scope
        respect_scrolloff = false,   -- Stop scrolling when the cursor reaches the scrolloff margin of the file
        cursor_scrolls_alone = true, -- The cursor will keep on scrolling even if the window cannot scroll further
        easing_function = nil,        -- Default easing function
        pre_hook = nil,              -- Function to run before the scrolling animation starts
        post_hook = nil,              -- Function to run after the scrolling animation ends
        })
  end
},
```

### [neuron](https://github.com/oberblastmeister/neuron.nvim)

**next generation note-taking**

```lua
 {"oberblastmeister/neuron.nvim"},
```

### [nvim-lastplace](https://github.com/ethanholz/nvim-lastplace)

**pick up where you left off**

```lua
 {
  "ethanholz/nvim-lastplace",
  event = "BufRead",
  config = function()
   require("nvim-lastplace").setup({
    lastplace_ignore_buftype = { "quickfix", "nofile", "help" },
    lastplace_ignore_filetype = {
     "gitcommit", "gitrebase", "svn", "hgcommit",
    },
    lastplace_open_folds = true,
   })
  end,
 },
```

### [persistence](https://github.com/folke/persistence.nvim)

**simple session management**

```lua
{
  "folke/persistence.nvim",
    event = "BufReadPre", -- this will only start session saving when an actual file was opened
    module = "persistence",
    config = function()
      require("persistence").setup {
        dir = vim.fn.expand(vim.fn.stdpath "config" .. "/session/"),
        options = { "buffers", "curdir", "tabpages", "winsize" },
      }
  end,
},
```

Also define keybindings in your `config.lua`

```lua
  lvim.builtin.which_key.mappings["S"]= {
    name = "Session",
    c = { "<cmd>lua require('persistence').load()<cr>", "Restore last session for current dir" },
    l = { "<cmd>lua require('persistence').load({ last = true })<cr>", "Restore last session" },
    Q = { "<cmd>lua require('persistence').stop()<cr>", "Quit without saving session" },
  }
```

### [todo-comments.nvim](https://github.com/folke/todo-comments.nvim)

**highlight and search for todo comments**

```lua
{
  "folke/todo-comments.nvim",
  event = "BufRead",
  config = function()
    require("todo-comments").setup()
  end,
},
```

### [vim-cursorword](https://github.com/itchyny/vim-cursorword)

**underlines the word under the cursor**

```lua
{
  "itchyny/vim-cursorword",
    event = {"BufEnter", "BufNewFile"},
    config = function()
      vim.api.nvim_command("augroup user_plugin_cursorword")
      vim.api.nvim_command("autocmd!")
      vim.api.nvim_command("autocmd FileType NvimTree,lspsagafinder,dashboard,vista let b:cursorword = 0")
      vim.api.nvim_command("autocmd WinEnter * if &diff || &pvw | let b:cursorword = 0 | endif")
      vim.api.nvim_command("autocmd InsertEnter * let b:cursorword = 0")
      vim.api.nvim_command("autocmd InsertLeave * let b:cursorword = 1")
      vim.api.nvim_command("augroup END")
      end
},
```

### [vim-repeat](https://github.com/tpope/vim-repeat)

**enable repeating supported plugin maps with "."**

```lua
{ "tpope/vim-repeat" },
```

### [vim-sanegx](https://github.com/felipec/vim-sanegx)

**open url with `gx`**

```lua
{
  "felipec/vim-sanegx",
  event = "BufRead",
},
```

### [vim-surround](https://github.com/tpope/vim-surround)

**mappings to delete, change and add surroundings**

```lua
{
  "tpope/vim-surround",

  -- make sure to change the value of `timeoutlen` if it's not triggering correctly, see https://github.com/tpope/vim-surround/issues/117
  -- setup = function()
    --  vim.o.timeoutlen = 500
  -- end
},
```

### [vim-wakatime](https://github.com/wakatime/vim-wakatime)

**metrics, insights, and time tracking automatically generated from your programming activity**

```lua
{
  "wakatime/vim-wakatime"
}
```

Once installed and synced, add your WakaTime API Key via `:WakaTimeApiKey` command

## Language specific

### [bracey](https://github.com/turbio/bracey.vim)

**live edit html, css, and javascript**

```lua
{
  "turbio/bracey.vim",
  cmd = {"Bracey", "BracyStop", "BraceyReload", "BraceyEval"},
  build = "npm install --prefix server",
},
```

### [vim-bundler](https://github.com/tpope/vim-bundler)

**lightweight support for ruby's bundler**

```lua
{
  "tpope/vim-bundler",
  cmd = {"Bundler", "Bopen", "Bsplit", "Btabedit"}
},
```

### [vim-rails](https://github.com/tpope/vim-rails)

**edit ruby on rails applications**

```lua
{
  "tpope/vim-rails",
  cmd = {
    "Eview",
    "Econtroller",
    "Emodel",
    "Smodel",
    "Sview",
    "Scontroller",
    "Vmodel",
    "Vview",
    "Vcontroller",
    "Tmodel",
    "Tview",
    "Tcontroller",
    "Rails",
    "Generate",
    "Runner",
    "Extract"
  }
},

```
