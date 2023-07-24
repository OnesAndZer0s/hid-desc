"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unicode = void 0;
var Unicode;
(function (Unicode) {
    Unicode.UsagePage = () => 0x10;
    Unicode.Char = (char) => char.charCodeAt(0);
    Unicode.Num = (num) => num;
})(Unicode = exports.Unicode || (exports.Unicode = {}));
