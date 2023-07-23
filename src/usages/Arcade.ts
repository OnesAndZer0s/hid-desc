export namespace Arcade {
  export const UsagePage = () => 0x91;
}

export enum Arcade {
  GeneralPurposeIOCard = 0x01,
  CoinDoor = 0x02,
  WatchdogTimer = 0x03,
  GeneralPurposeAnalogInputState = 0x30,
  GeneralPurposeDigitalInputState = 0x31,
  GeneralPurposeOpticalInputState = 0x32,
  GeneralPurposeDigitalOutputState = 0x33,
  NumberOfCoinDoors = 0x34,
  CoinDrawerDropCount = 0x35,
  CoinDrawerStart = 0x36,
  CoinDrawerService = 0x37,
  CoinDrawerTilt = 0x38,
  CoinDrawerTest = 0x39,
  CoinDoorLockout = 0x40,
  WatchdogTimeout = 0x41,
  WatchdogAction = 0x42,
  WatchdogReboot = 0x43,
  WatchdogRestart = 0x44,
  AlarmInput = 0x45,
  CoinDoorCounter = 0x46,
  IODirectionMapping = 0x47,
  SetIODirectionMapping = 0x48,
  ExtendedOpticalInputState = 0x49,
  PinPadInputState = 0x4A,
  PinPadStatus = 0x4B,
  PinPadOutput = 0x4C,
  PinPadCommand = 0x4D,
}