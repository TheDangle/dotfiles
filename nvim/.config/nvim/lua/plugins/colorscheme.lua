return {
	-- colorscheme
	{
		"rebelot/kanagawa.nvim",
		name = "kanagawa",
		priority = 1000,
		config = function()
			vim.cmd.colorscheme("kanagawa")
		end,
	},

	{

		-- welcome dashboard
		"goolord/alpha-nvim",
		config = function()
			local alpha = require("alpha")
			local dashboard = require("alpha.themes.dashboard")

			-- Customize the dashboard content
			dashboard.section.header.val = {

				[[  _   _         __     __           __     _______________   ]],
				[[ | \ | | ___  __\ \   / /_  __  __  \ \   / /\_   ___   _/  ]],
				[[ |  \| |/ _ \/ _ \ \ / /| |/  \/  \  \ \ / /   | |   | |    ]],
				[[ | |\  |  __/ (_) \ V / | |  /\/\  |  \ v /_  _| |___| |_  ]],
				[[ |_| \_|\___|\___/ \_/  |_|__|  |__|   \_/|_|/___________\  ]],
			}

			dashboard.section.buttons.val = {
				dashboard.button("f", "  New File", ":ene <BAR> startinsert <CR>"),
				dashboard.button("c", "  Config", ":e ~/.config/nvim/init.lua<CR>"),
				dashboard.button("p", "  Plugins", ":Lazy<CR>"),
				dashboard.button("m", "M Mason", ":Mason<CR>"),
				dashboard.button("q", "  Quit", ":qa<CR>"),
			}

			alpha.setup(dashboard.config)
		end,
	},
}
