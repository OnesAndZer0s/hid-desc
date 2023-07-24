export declare namespace SoC {
    const UsagePage: () => number;
}
export declare enum SoC {
    SoCControl = 1,
    FirmwareTransfer = 2,
    FirmwareFileID = 3,
    FileOffsetInBytes = 4,
    FileTransferSizeMaxInBytes = 5,
    FilePayload = 6,
    FilePayloadSizeInBytes = 7,
    FilePayloadContainsLastBytes = 8,
    FileTransferStop = 9,
    FileTransferTillEnd = 10
}
