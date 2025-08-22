return {
	"echasnovski/mini.pick",
	version = false,
	config = function()
		require("mini.pick").setup()
		-- remap keys
		vim.keymap.set("n", "<leader>ff", ":Pick files<CR>", { desc = "Toggle file explorer" })
		vim.keymap.set("n", "<leader>fg", ":Pick grep_live<CR>", { desc = "Grep live in project" })
	end,
}
