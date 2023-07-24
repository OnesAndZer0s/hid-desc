"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HIDDesc_1 = require("./HIDDesc");
const util_1 = require("./util");
HIDDesc_1.HIDDesc.prototype.Input = function (desc) {
    this.desc.push(...(0, util_1.ParseToHex)(0x80, desc));
    return this;
};
HIDDesc_1.HIDDesc.prototype.Output = function (desc) {
    this.desc.push(...(0, util_1.ParseToHex)(0x90, desc));
    return this;
};
HIDDesc_1.HIDDesc.prototype.Feature = function (desc) {
    this.desc.push(...(0, util_1.ParseToHex)(0xB0, desc));
    return this;
};
HIDDesc_1.HIDDesc.prototype.Collection = function (collectionType) {
    // despite being able to define size ( 1010 00nn ), 
    // collectionType is always clamped between 0x00-0xff
    this.desc.push(...(0, util_1.ParseToHex)(0xA0, collectionType));
    return this;
};
HIDDesc_1.HIDDesc.prototype.EndCollection = function () {
    // this literally has no inputs, so I have no
    // idea why the spec says it can be 110000nn
    // like, dude. there is always going to be zero bytes of input
    this.desc.push(0xc0);
    return this;
};
