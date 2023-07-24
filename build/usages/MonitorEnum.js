"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorEnum = void 0;
var MonitorEnum;
(function (MonitorEnum) {
    MonitorEnum.UsagePage = () => 0x81;
    MonitorEnum.Enum = (n) => Math.min(65535, Math.max(0, n));
})(MonitorEnum = exports.MonitorEnum || (exports.MonitorEnum = {}));
