"use strict";
/**
 * beautify command
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const disposableBeautify = vscode_1.commands.registerCommand("loveme.beautify", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    if (vscode_1.window.state.focused === true && !editor.selection.isEmpty) {
        vscode_1.commands
            .executeCommand("editor.action.formatSelection")
            .then(function () { });
    }
    else {
        vscode_1.commands
            .executeCommand("editor.action.formatDocument")
            .then(function () { });
    }
});
exports.default = disposableBeautify;
//# sourceMappingURL=Beautify.js.map