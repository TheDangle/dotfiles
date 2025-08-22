local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
	vim.fn.system({
		"git",
		"clone",
		"--filter=blob:none",
		"https://github.com/folke/lazy.nvim.git",
		"--branch=stable",
		lazypath,
	})
end
vim.opt.rtp:prepend(lazypath)

-- Set up the plugins
local opts = {
	spec = {
		-- Automatically load all plugin specs from the 'lua/plugin/ dir
		{ import = "plugins" },
	},
	dev = {
		-- Configure any local plugins here for development
	},
}

require("lazy").setup(opts)
