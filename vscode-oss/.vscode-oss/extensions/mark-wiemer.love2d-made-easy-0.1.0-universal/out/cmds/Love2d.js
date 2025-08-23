"use strict";
/* eslint-disable @typescript-eslint/semi */
/**
 * love2d button to run main.lua
 *
 * @2020/12/09
 *
 * By: lwz7512@gmail.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMainLua = void 0;
var loveStarted = false;
// import path = require('path');
const path = require("path");
const child = require("child_process");
const vscode_1 = require("vscode");
// ====== main.lua generator @2020/12/10 ======
exports.createMainLua = vscode_1.commands.registerCommand('loveme.mainlua', () => {
    vscode_1.window.showInformationMessage('love2d main.lua created!');
    let mainUri = vscode_1.Uri.file(path.join(__dirname, '../../templates/main.lua'));
    let mainlua = vscode_1.workspace.fs.readFile(mainUri);
    let rootPath = vscode_1.workspace.workspaceFolders[0].uri.fsPath;
    let mainOut = vscode_1.Uri.file(path.join(rootPath, 'main.lua'));
    mainlua.then((content) => {
        // console.log(value.toString())
        vscode_1.workspace.fs.writeFile(mainOut, content).then(() => {
            vscode_1.commands.executeCommand('vscode.open', mainOut);
        }, (failure) => {
            console.error('>>> open failed!');
        });
    }, (reason) => {
        console.error(reason);
    });
});
// ====== Default love2d command ======
const disposableLove2d = vscode_1.commands.registerCommand('loveme.love2d', () => {
    let editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        return vscode_1.window.showWarningMessage('No editor open!');
    }
    if (loveStarted) {
        return console.warn('love2d application started!');
    }
    let love2dConfig = vscode_1.workspace.getConfiguration();
    let windowsLove2dPath = love2dConfig.get('Windows Love2d Path');
    let unixLove2dPath = love2dConfig.get('Unix Love2d Path');
    // console.warn('get windows love 2d path:' + windowsLove2dPath);
    // let projectRoot = workspace.rootPath; // @deprecated
    let projectRoot = vscode_1.workspace.workspaceFolders[0].uri.fsPath;
    // console.log('>>> root: '+projectRoot)
    // love project runner
    let loveProjectHandler = (files) => {
        // console.log('>>> got main.lua size:')
        let nomainlua = 'No main.lua found in current project!';
        if (!files.length) {
            return vscode_1.window.showErrorMessage(nomainlua);
        }
        // let the user know we are starting love2d
        let statusBarMessage = 'Running love2d game...';
        vscode_1.window.setStatusBarMessage(statusBarMessage);
        // check love2d ...
        let isWindows = process.platform === 'win32';
        let love2dExePath = isWindows
            ? `"${windowsLove2dPath}"`
            : `"${unixLove2dPath}"`;
        // let love2dExePath = isWindows ? '"C:\\Program Files\\LOVE\\love.exe"' : 'love';
        child
            .exec(`${love2dExePath} --version`, function (error, stdout, stderr) {
            if (error) {
                console.error('>>> love2d not found!');
                vscode_1.window.showErrorMessage(stderr);
                return console.log(stderr);
            }
            // LOVE 11.3 (Mysterious Mysteries)
            console.log(stdout);
            // update the status bar with the love2d version information from stdout
            vscode_1.window.setStatusBarMessage(`${statusBarMessage} ${stdout}`);
            // execute main.lua
            // FIXME: Because of issue #5 - https://github.com/lwz7512/love2d-made-easy/issues/5
            // Thanks to `ShinuToki` resolution!
            child
                .exec(`${love2dExePath} ` + `"${projectRoot}"`)
                .on('close', function (code, signal) {
                // clear the status bar when the game is closed
                vscode_1.window.setStatusBarMessage('');
            });
        })
            .on('close', function (code, signal) {
            // console.log('>>> love process closed!')
            loveStarted = false;
        })
            .on('error', function (code, signal) {
            console.error('>>> love process error: ' + code + '/' + signal);
        })
            .on('exit', function (code, signal) {
            // console.log('>>> love process exit!')
        });
        // console.log('>>> start love child process ...')
        loveStarted = true;
    };
    // console.log('workspace.name: '+workspace.name)
    vscode_1.workspace.findFiles('main.lua').then(loveProjectHandler);
});
exports.default = disposableLove2d;
//# sourceMappingURL=Love2d.js.map