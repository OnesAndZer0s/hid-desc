"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HIDDesc_1 = require("./HIDDesc");
const util_1 = require("./util");
HIDDesc_1.HIDDesc.prototype.UsagePage = function (page) {
    // despite being able to define size ( 0000 01nn ),
    // the only usage page that isn't one byte is the 
    // vendor defined pages and 0xFIDO.
    this.desc.push(...(0, util_1.ParseToHex)(0x04, page.UsagePage()));
    return this;
};
HIDDesc_1.HIDDesc.prototype.ReportSize = function (size) {
    this.desc.push(...(0, util_1.ParseToHex)(0x74, size));
    return this;
};
HIDDesc_1.HIDDesc.prototype.ReportID = function (id) {
    this.desc.push(...(0, util_1.ParseToHex)(0x84, id));
    return this;
};
HIDDesc_1.HIDDesc.prototype.ReportCount = function (count) {
    this.desc.push(...(0, util_1.ParseToHex)(0x94, count));
    return this;
};
HIDDesc_1.HIDDesc.prototype.LogicalMinimum = function (min) {
    this.desc.push(...(0, util_1.ParseToHex)(0x14, min, true));
    return this;
};
HIDDesc_1.HIDDesc.prototype.LogicalMaximum = function (max) {
    this.desc.push(...(0, util_1.ParseToHex)(0x24, max, true));
    return this;
};
HIDDesc_1.HIDDesc.prototype.PhysicalMinimum = function (min) {
    this.desc.push(...(0, util_1.ParseToHex)(0x34, min, true));
    return this;
};
HIDDesc_1.HIDDesc.prototype.PhysicalMaximum = function (max) {
    this.desc.push(...(0, util_1.ParseToHex)(0x44, max, true));
    return this;
};
HIDDesc_1.HIDDesc.prototype.Push = function () {
    this.desc.push(0xA4);
    return this;
};
HIDDesc_1.HIDDesc.prototype.Pop = function () {
    this.desc.push(0xB4);
    return this;
};
HIDDesc_1.HIDDesc.prototype.UnitExponent = function (exp) {
    this.desc.push(...(0, util_1.ParseToHex)(0x54, exp, true));
    return this;
};
HIDDesc_1.HIDDesc.prototype.Unit = function (unit) {
    var val = [], bits = 4;
    val.push(unit.System ?? 0, unit.Length ?? 0, unit.Mass ?? 0, unit.Time ?? 0, unit.Temperature ?? 0, unit.Current ?? 0, unit.LuminousIntensity ?? 0);
    val = parseInt((val.map((v) => ((v < 0) ? v + 16 : v).toString(16))
        .join("") + "0").split("").reverse().join(""), 16);
    this.desc.push(...(0, util_1.ParseToHex)(0x64, val, true));
    return this;
};
