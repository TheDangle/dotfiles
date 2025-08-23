"use strict";
/**
 * see opened files list
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const disposableFileList = vscode_1.commands.registerCommand("loveme.filelist", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands
        .executeCommand("workbench.action.showAllEditorsByMostRecentlyUsed")
        .then(function () { });
});
exports.default = disposableFileList;
//# sourceMappingURL=FileList.js.map