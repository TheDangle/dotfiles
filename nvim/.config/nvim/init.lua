-- disable netrw
vim.g.loaded_netrw = 1
vim.g.loaded_netrwPlugin = 1

-- set up basic options and keymaps
require("options")
require("keymaps")

-- bootstrap and configure lazy.nvim
require("lazy_bootstrap")

require("floating_terminal")
