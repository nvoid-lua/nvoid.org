# Configuration

You can configure Nvoid by using the configuration file located in `~/.config/nvoid/config.lua`

Many Nvoid internal settings are exposed through the nvoid global object. To see a list of all available settings, run this command to generate an nv-settings.lua file.

```sh
nvoid --headless +'lua require("nvoid.utils").generate_settings()' +qa && sort -o nv-settings.lua{,}
```
