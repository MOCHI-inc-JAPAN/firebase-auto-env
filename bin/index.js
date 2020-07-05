#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs_1 = __importDefault(require("fs"));
function parseArgs() {
    var _evalArgs = process.argv.splice(2);
    if (_evalArgs.length <= 0)
        _evalArgs.push('.env');
    if (_evalArgs.length < 2) {
        var packageJson = JSON.parse(fs_1.default.readFileSync(process.cwd() + "/package.json", 'utf8'));
        packageJson.name && _evalArgs.push(packageJson.name);
    }
    return _evalArgs.join(' ');
}
try {
    console.log(child_process_1.execSync(__dirname + "/exec.sh " + parseArgs()).toString());
    console.log('done');
}
catch (error) {
    console.error(error);
    process.exit(1);
}
