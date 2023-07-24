"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monitor = void 0;
var Monitor;
(function (Monitor) {
    Monitor.UsagePage = () => 0x80;
})(Monitor = exports.Monitor || (exports.Monitor = {}));
(function (Monitor) {
    Monitor[Monitor["MonitorControl"] = 1] = "MonitorControl";
    Monitor[Monitor["EDIDInformation"] = 2] = "EDIDInformation";
    Monitor[Monitor["VDIFInformation"] = 3] = "VDIFInformation";
    Monitor[Monitor["VESAVersion"] = 4] = "VESAVersion";
})(Monitor = exports.Monitor || (exports.Monitor = {}));
