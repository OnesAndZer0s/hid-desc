"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button;
(function (Button) {
    Button.UsagePage = () => 0x09;
    Button.NoButton = 0x00;
    Button.ButtonN = (n) => Math.min(65535, Math.max(0, n));
})(Button = exports.Button || (exports.Button = {}));
