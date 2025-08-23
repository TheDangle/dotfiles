"use strict";
/**
 * utility functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomizeCmds = exports.checkCpp = void 0;
const vscode_1 = require("vscode");
const Beautify_1 = require("../cmds/Beautify");
const FormatWith_1 = require("../cmds/FormatWith");
const FileList_1 = require("../cmds/FileList");
const Switch_1 = require("../cmds/Switch");
const Love2d_1 = require("../cmds/Love2d");
const BuiltinCmds_1 = require("../cmds/BuiltinCmds");
var init = false;
var hasCpp = false;
const checkCpp = () => {
    if (init)
        return;
    vscode_1.commands.getCommands().then(function (value) {
        let result = value.indexOf("C_Cpp.SwitchHeaderSource");
        if (result >= 0) {
            hasCpp = true;
        }
    });
    init = true;
};
exports.checkCpp = checkCpp;
const addCustomizeCmds = (context) => {
    context.subscriptions.push(BuiltinCmds_1.disptoggleActivityBar);
    context.subscriptions.push(BuiltinCmds_1.dispBack);
    context.subscriptions.push(BuiltinCmds_1.dispForward);
    context.subscriptions.push(BuiltinCmds_1.dispToggleWS);
    context.subscriptions.push(BuiltinCmds_1.dispQuickOpen);
    context.subscriptions.push(BuiltinCmds_1.dispFR);
    context.subscriptions.push(BuiltinCmds_1.dispSave);
    context.subscriptions.push(BuiltinCmds_1.disptoggleTerminal);
    context.subscriptions.push(BuiltinCmds_1.dispUd);
    context.subscriptions.push(BuiltinCmds_1.dispRd);
    context.subscriptions.push(BuiltinCmds_1.dispCL);
    context.subscriptions.push(BuiltinCmds_1.dispSaveAll);
    context.subscriptions.push(BuiltinCmds_1.dispOF);
    context.subscriptions.push(BuiltinCmds_1.dispNF);
    context.subscriptions.push(BuiltinCmds_1.dispGTD);
    context.subscriptions.push(BuiltinCmds_1.dispCut);
    context.subscriptions.push(BuiltinCmds_1.dispCp);
    context.subscriptions.push(BuiltinCmds_1.dispPst);
    context.subscriptions.push(BuiltinCmds_1.dispCWSave);
    context.subscriptions.push(BuiltinCmds_1.dispSC);
    context.subscriptions.push(BuiltinCmds_1.dispSD);
    context.subscriptions.push(FileList_1.default);
    context.subscriptions.push(Beautify_1.default);
    context.subscriptions.push(FormatWith_1.default);
    context.subscriptions.push((0, Switch_1.default)(hasCpp));
    context.subscriptions.push(Love2d_1.default);
    context.subscriptions.push(Love2d_1.createMainLua);
};
exports.addCustomizeCmds = addCustomizeCmds;
//# sourceMappingURL=CmdHandler.js.map