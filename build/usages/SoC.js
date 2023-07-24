"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoC = void 0;
var SoC;
(function (SoC) {
    SoC.UsagePage = () => 0x11;
})(SoC = exports.SoC || (exports.SoC = {}));
(function (SoC) {
    SoC[SoC["SoCControl"] = 1] = "SoCControl";
    SoC[SoC["FirmwareTransfer"] = 2] = "FirmwareTransfer";
    SoC[SoC["FirmwareFileID"] = 3] = "FirmwareFileID";
    SoC[SoC["FileOffsetInBytes"] = 4] = "FileOffsetInBytes";
    SoC[SoC["FileTransferSizeMaxInBytes"] = 5] = "FileTransferSizeMaxInBytes";
    SoC[SoC["FilePayload"] = 6] = "FilePayload";
    SoC[SoC["FilePayloadSizeInBytes"] = 7] = "FilePayloadSizeInBytes";
    SoC[SoC["FilePayloadContainsLastBytes"] = 8] = "FilePayloadContainsLastBytes";
    SoC[SoC["FileTransferStop"] = 9] = "FileTransferStop";
    SoC[SoC["FileTransferTillEnd"] = 10] = "FileTransferTillEnd";
})(SoC = exports.SoC || (exports.SoC = {}));
