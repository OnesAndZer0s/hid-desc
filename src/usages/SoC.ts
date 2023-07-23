export namespace SoC {
  export const UsagePage = () => 0x11;
}

export enum SoC {
  SoCControl = 0x01,
  FirmwareTransfer = 0x02,
  FirmwareFileID = 0x03,
  FileOffsetInBytes = 0x04,
  FileTransferSizeMaxInBytes = 0x05,
  FilePayload = 0x06,
  FilePayloadSizeInBytes = 0x07,
  FilePayloadContainsLastBytes = 0x08,
  FileTransferStop = 0x09,
  FileTransferTillEnd = 0x0A,
}