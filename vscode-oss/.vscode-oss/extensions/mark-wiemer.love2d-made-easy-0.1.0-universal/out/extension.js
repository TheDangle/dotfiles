"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const CmdHandler_1 = require("./common/CmdHandler");
const Providers_1 = require("./cmds/Providers");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // add complex command separately
    (0, CmdHandler_1.addCustomizeCmds)(context);
    // WORKS ! @2020/12/19
    (0, Providers_1.addProviders)(context);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map