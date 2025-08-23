"use strict";
/**
 * format file
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const disposableFormatWith = vscode_1.commands.registerCommand("loveme.formatWith", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    if (vscode_1.window.state.focused === true && !editor.selection.isEmpty) {
        vscode_1.commands
            .executeCommand("editor.action.formatSelection.multiple")
            .then(function () { });
    }
    else {
        vscode_1.commands
            .executeCommand("editor.action.formatDocument.multiple")
            .then(function () { });
    }
});
exports.default = disposableFormatWith;
//# sourceMappingURL=FormatWith.js.map