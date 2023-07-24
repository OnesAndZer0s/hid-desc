"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HIDDesc_1 = require("./HIDDesc");
const util_1 = require("./util");
HIDDesc_1.HIDDesc.prototype.Usage = function (page) {
    this.desc.push(...(0, util_1.ParseToHex)(0x08, page));
    return this;
};
HIDDesc_1.HIDDesc.prototype.Delimiter = function (open) {
    // despite being able to define size ( 1010 10nn ), 
    // open is a boolean.
    this.desc.push(0xA9, open ? 0x01 : 0x00);
    return this;
};
HIDDesc_1.HIDDesc.prototype.UsageMinimum = function (min) {
    this.desc.push(...(0, util_1.ParseToHex)(0x18, min, true));
    return this;
};
HIDDesc_1.HIDDesc.prototype.UsageMaximum = function (max) {
    this.desc.push(...(0, util_1.ParseToHex)(0x28, max, true));
    return this;
};
