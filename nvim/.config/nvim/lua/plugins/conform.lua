return {
	"stevearc/conform.nvim",
	opts = {
		formatters_by_ft = {
			lua = { "stylua" },
			-- Conform will run multiple formatters sequentially
			-- Conform will run the first available formatter
			javascript = { "prettierd", "prettier", stop_after_first = true },

			html = { "prettierd", "prettier", stop_after_first = true },

			docker = { "hadolint" },

			ansible = { "ansible-lint" },

			sql = { "sql-formatter", "sqlfluff", "prettierd", stop_after_first = true },

			markdown = { "prettierd", stop_after_first = true },

			python = function(bufnr)
				if require("conform").get_formatter_info("ruff_format", bufnr).available then
					return { "ruff_format" }
				else
					return { "isort", "black" }
				end
			end,
			-- Use the "*" filetype to run formatters on all filetypes.
			["*"] = { "codespell" },
			-- Use the "_" filetype to run formatters on filetypes that don't
			-- have other formatters configured.
			["_"] = { "trim_whitespace" },
		},
		format_on_save = {
			timeout_ms = 500,
			lsp_format = "fallback",
		},
	},
}
