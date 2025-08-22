local keymap = vim.keymap
local opts = { noremap = true, silent = true }

-- Clear search highlights with <leader>n
keymap.set("n", "<leader>n", ":nohlsearch<CR>")

-- Remap escape to clear the terminal
keymap.set("t", "<Esc>", "<C-\\><C-n>")

-- save file and quit
keymap.set("n", "<leader>w", ":update<Return>")
keymap.set("n", "<leader>q", ":quit<Return>", opts)
keymap.set("n", "<leader>Q", ":qa<Return>", opts)

-- Toggle Oil file explorer
keymap.set("n", "<leader>e", ":Oil<CR>", opts)

-- delete empty buffer
keymap.set("n", "<leader>db", ":bdelete!<CR>", opts)

-- oil keymaps
keymap.set("n", "-", "<cmd>Oil --float<CR>", opts)
