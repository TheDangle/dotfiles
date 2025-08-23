"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispSD = exports.dispSC = exports.dispCWSave = exports.dispPst = exports.dispCp = exports.dispCut = exports.dispGTD = exports.dispNF = exports.dispOF = exports.dispSaveAll = exports.dispCL = exports.dispRd = exports.dispUd = exports.dispFR = exports.dispQuickOpen = exports.dispToggleWS = exports.dispForward = exports.dispBack = exports.disptoggleActivityBar = exports.disptoggleTerminal = exports.dispSave = void 0;
/**
 * builtin commands
 */
const vscode_1 = require("vscode");
exports.dispSave = vscode_1.commands.registerCommand("loveme.save", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.files.save").then(v => true);
});
exports.disptoggleTerminal = vscode_1.commands.registerCommand("loveme.toggleTerminal", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.terminal.toggleTerminal").then(v => true);
});
exports.disptoggleActivityBar = vscode_1.commands.registerCommand("loveme.toggleActivityBar", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.toggleActivityBarVisibility").then(v => true);
});
exports.dispBack = vscode_1.commands.registerCommand("loveme.back", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.navigateBack").then(v => true);
});
exports.dispForward = vscode_1.commands.registerCommand("loveme.forward", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.navigateForward").then(v => true);
});
exports.dispToggleWS = vscode_1.commands.registerCommand("loveme.toggleWhitespace", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("editor.action.toggleRenderWhitespace").then(v => true);
});
exports.dispQuickOpen = vscode_1.commands.registerCommand("loveme.quickOpen", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.quickOpen").then(v => true);
});
exports.dispFR = vscode_1.commands.registerCommand("loveme.findReplace", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("editor.action.startFindReplaceAction").then(v => true);
});
exports.dispUd = vscode_1.commands.registerCommand("loveme.undo", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("undo").then(v => true);
});
exports.dispRd = vscode_1.commands.registerCommand("loveme.redo", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("redo").then(v => true);
});
exports.dispCL = vscode_1.commands.registerCommand("loveme.commentLine", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("editor.action.commentLine").then(v => true);
});
exports.dispSaveAll = vscode_1.commands.registerCommand("loveme.saveAll", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.files.saveAll").then(v => true);
});
exports.dispOF = vscode_1.commands.registerCommand("loveme.openFile", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.files.openFile").then(v => true);
});
exports.dispNF = vscode_1.commands.registerCommand("loveme.newFile", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.files.newUntitledFile").then(v => true);
});
exports.dispGTD = vscode_1.commands.registerCommand("loveme.goToDefinition", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("editor.action.revealDefinition").then(v => true);
});
exports.dispCut = vscode_1.commands.registerCommand("loveme.cut", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("editor.action.clipboardCutAction").then(v => true);
});
exports.dispCp = vscode_1.commands.registerCommand("loveme.copy", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("editor.action.clipboardCopyAction").then(v => true);
});
exports.dispPst = vscode_1.commands.registerCommand("loveme.paste", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("editor.action.clipboardPasteAction").then(v => true);
});
exports.dispCWSave = vscode_1.commands.registerCommand("loveme.compareWithSaved", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.files.action.compareWithSaved").then(v => true);
});
exports.dispSC = vscode_1.commands.registerCommand("loveme.showCommands", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.showCommands").then(v => true);
});
exports.dispSD = vscode_1.commands.registerCommand("loveme.startDebug", () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor || !editor.viewColumn) {
        return vscode_1.window.showWarningMessage('No editor open!'); // No open text editor
    }
    vscode_1.commands.executeCommand("workbench.action.debug.start").then(v => true);
});
//# sourceMappingURL=BuiltinCmds.js.map