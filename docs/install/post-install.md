# Quick start

<details>
<summary>Neoivm 0.9.0+</summary>
<h2 id="#heading-id"></h2>

## If you're new to NeoVim/Vim
I strongly encourage you to learn how to use NeoVim/Vim, as it's more than a normal text editor.

These are highly recommend and a **must do for any new Vimmer**

- Vim tutor
  ```
  :Tutor
  ```
- In-built help docs
  ```
  :h <cmd>
  :h autocommand
  :h nvim.api
  :h insert
  ```
- [Google your issue](https://google.com)
  - Example format query, `neovim how to delete 10 lines`
- [NeoVim quick reference](https://neovim.io/doc/user/quickref.html)
- Vim movement games
  - [Vim Adventures](https://vim-adventures.com/)
  - [Vim Genius](http://www.vimgenius.com/)
After the initial installation, we recommend setting up a few things based on your needs.

</details>

## Tree-sitter

To install syntax highlighting and treesitter support for your language:

```vim
:TSInstall <TAB>
```

**NOTE:** `<TAB>` indicates that you should press the `<TAB>` key and cycle through your options

Not all languages are supported. For a list of supported languages [look here](https://github.com/nvim-treesitter/nvim-treesitter#supported-languages)

## Language Server

To install a Language Server for your language:

```vim
:LspInstall <TAB>
```

Sometimes the language server for your language will not have an obvious name. For instance, the language server for ruby is solargraph. Metals is the language server for scala, etc. To find the corresponding language server for your language [look here](https://github.com/kabouzeid/nvim-lspinstall)

## Nerd Fonts
Installing a [nerd font](https://www.nerdfonts.com/) is recommended. Otherwise some symbols won't be rendered properly.
