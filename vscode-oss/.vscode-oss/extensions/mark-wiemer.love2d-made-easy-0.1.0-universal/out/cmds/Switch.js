"use strict";
/**
 * switch command
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const disposableSwitch = (hasCpp) => {
    return vscode_1.commands.registerCommand("loveme.switch", () => {
        if (hasCpp) {
            vscode_1.commands.executeCommand("C_Cpp.SwitchHeaderSource").then(function () { });
        }
        else {
            vscode_1.window.showErrorMessage("C/C++ extension (ms-vscode.cpptools) is not installed!");
        }
    });
};
exports.default = disposableSwitch;
//# sourceMappingURL=Switch.js.map