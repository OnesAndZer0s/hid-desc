"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseToHex = void 0;
function ParseToHex(instruction, val, signed = false) {
    var bits = 1, retVal;
    if (signed) {
        if (val < -128 || val > 127)
            bits = 2;
        if (val < -32768 || val > 32767)
            bits = 4;
        if (val < -2147483648 || val > 2147483647)
            throw new Error(`Value ${val} is too large for 4 bytes`);
        if (val < 0)
            retVal = (val + Math.pow(2, bits * 8)).toString(16).padStart(bits * 2, 'f');
        else
            retVal = val.toString(16).padStart(bits * 2, '0');
    }
    else {
        if (val < 0)
            throw new Error(`Value ${val} is negative, but signed was false`);
        if (val > 255)
            bits = 2;
        if (val > 65535)
            bits = 4;
        if (val > 4294967295)
            throw new Error(`Value ${val} is too large for 4 bytes`);
        retVal = val.toString(16).padStart(bits * 2, '0');
    }
    retVal = (retVal.match(/.{1,2}/g)).reverse().map(x => parseInt(x, 16));
    retVal.unshift(instruction + 1 + Math.log2(bits));
    return retVal;
}
exports.ParseToHex = ParseToHex;
