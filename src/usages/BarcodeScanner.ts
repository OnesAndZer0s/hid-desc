export namespace BarcodeScanner {
  export const UsagePage = () => 0x8C;
}

export enum BarcodeScanner {
  BarcodeBadgeReader = 0x01,
  BarcodeScanner = 0x02,
  DumbBarCodeScanner = 0x03,
  CordlessScannerBase = 0x04,
  BarcodeScannerCradle = 0x05,
  AttributeReport = 0x10,
  SettingsReport = 0x11,
  ScannedDataReport = 0x12,
  RawScannedDataReport = 0x13,
  TriggerReport = 0x14,
  StatusReport = 0x15,
  UPCEANControlReport = 0x16,
  EAN23LabelControlReport = 0x17,
  Code39ControlReport = 0x18,
  Interleaved2Of5ControlReport = 0x19,
  Standard2Of5ControlReport = 0x1A,
  MSIPlesseyControlReport = 0x1B,
  CodabarControlReport = 0x1C,
  Code128ControlReport = 0x1D,
  Misc1DControlReport = 0x1E,
  TwoDControlReport = 0x1F,
  AimingPointerMode = 0x30,
  BarCodePresentSensor = 0x31,
  Class1ALaser = 0x32,
  Class2Laser = 0x33,
  HeaterPresent = 0x34,
  ContactScanner = 0x35,
  ElectronicArticleSurveillanceNotification = 0x36,
  ConstantElectronicArticleSurveillance = 0x37,
  ErrorIndication = 0x38,
  FixedBeeper = 0x39,
  GoodDecodeIndication = 0x3A,
  HandsFreeScanning = 0x3B,
  IntrinsicallySafe = 0x3C,
  KlasseEinsLaser = 0x3D,
  LongRangeScanner = 0x3E,
  MirrorSpeedControl = 0x3F,
  NotOnFileIndication = 0x40,
  ProgrammableBeeper = 0x41,
  Triggerless = 0x42,
  Wand = 0x43,
  WaterResistant = 0x44,
  MultiRangeScanner = 0x45,
  ProximitySensor = 0x46,
  FragmentDecoding = 0x4D,
  ScannerReadConfidence = 0x4E,
  DataPrefix = 0x4F,
  PrefixAIMI = 0x50,
  PrefixNone = 0x51,
  PrefixProprietary = 0x52,
  ActiveTime = 0x55,
  AimingLaserPattern = 0x56,
  BarCodePresent = 0x57,
  BeeperState = 0x58,
  LaserOnTime = 0x59,
  LaserState = 0x5A,
  LockoutTime = 0x5B,
  MotorState = 0x5C,
  MotorTimeout = 0x5D,
  PowerOnResetScanner = 0x5E,
  PreventReadOfBarcodes = 0x5F,
  InitiateBarcodeRead = 0x60,
  TriggerState = 0x61,
  TriggerMode = 0x62,
  TriggerModeBlinkingLaserOn = 0x63,
  TriggerModeContinuousLaserOn = 0x64,
  TriggerModeLaserOnWhilePulled = 0x65,
  TriggerModeLaserStaysOnAfterTriggerRelease = 0x66,
  CommitParametersToNVM = 0x6D,
  ParameterScanning = 0x6E,
  ParametersChanged = 0x6F,
  SetParameterDefaultValues = 0x70,
  ScannerInCradle = 0x75,
  ScannerInRange = 0x76,
  AimDuration = 0x7A,
  GoodReadLampDuration = 0x7B,
  GoodReadLampIntensity = 0x7C,
  GoodReadLED = 0x7D,
  GoodReadToneFrequency = 0x7E,
  GoodReadToneLength = 0x7F,
  GoodReadToneVolume = 0x80,
  NoReadMessage = 0x82,
  NotOnFileVolume = 0x83,
  PowerupBeep = 0x84,
  SoundErrorBeep = 0x85,
  SoundGoodReadBeep = 0x86,
  SoundNotOnFileBeep = 0x87,
  GoodReadWhenToWrite = 0x88,
  GRWTIAfterDecode = 0x89,
  GRWTLBeepLampAfterTransmit = 0x8A,
  GRWTIBeepLampAfterTransmit = 0x8B,
  BooklandEAN = 0x91,
  ConvertEAN8To13Type = 0x92,
  ConvertUPCAToEAN13 = 0x93,
  ConvertUPCEToA = 0x94,
  EAN13 = 0x95,
  EAN8 = 0x96,
  EAN99128Mandatory = 0x97,
  EAN99P5128Optional = 0x98,
  EnableEANTwoLabel = 0x99,
  UPCEAN = 0x9A,
  UPCEANCouponCode = 0x9B,
  UPCEANPeriodicals = 0x9C,
  UPCA = 0x9D,
  UPCAWith128Mandatory = 0x9E,
  UPCAWith128Optional = 0x9F,
  UPCAWithP5Optional = 0xA0,
  UPCE = 0xA1,
  UPCE1 = 0xA2,
  Periodical = 0xA9,
  PeriodicalAutoDiscriminatePlus2 = 0xAA,
  PeriodicalOnlyDecodeWithPlus2 = 0xAB,
  PeriodicalIgnorePlus2 = 0xAC,
  PeriodicalAutoDiscriminatePlus5 = 0xAD,
  PeriodicalOnlyDecodeWithPlus5 = 0xAE,
  PeriodicalIgnorePlus5 = 0xAF,
  Check = 0xB0,
  CheckDisablePrice = 0xB1,
  CheckEnable4DigitPrice = 0xB2,
  CheckEnable5DigitPrice = 0xB3,
  CheckEnableEuropean4DigitPrice = 0xB4,
  CheckEnableEuropean5DigitPrice = 0xB5,
  EANTwoLabel = 0xB7,
  EANThreeLabel = 0xB8,
  EAN8FlagDigit1 = 0xB9,
  EAN8FlagDigit2 = 0xBA,
  EAN8FlagDigit3 = 0xBB,
  EAN13FlagDigit1 = 0xBC,
  EAN13FlagDigit2 = 0xBD,
  EAN13FlagDigit3 = 0xBE,
  AddEANTwoOrThreeLabelDefinition = 0xBF,
  ClearAllEANTwoOrThreeLabelDefinitions = 0xC0,
  Codabar = 0xC3,
  Code128 = 0xC4,
  Code39 = 0xC7,
  Code93 = 0xC8,
  FullASCIIConversion = 0xC9,
  Interleaved2Of5 = 0xCA,
  ItalianPharmacyCode = 0xCB,
  MSIPlessey = 0xCC,
  Standard2Of5IATA = 0xCD,
  Standard2Of5 = 0xCE,
  TransmitStartStop = 0xD3,
  TriopticCode = 0xD4,
  UCCEAN128 = 0xD5,
  CheckDigit = 0xD6,
  CheckDigitDisable = 0xD7,
  CheckDigitEnableInterleaved2Of5OPCC = 0xD8,
  CheckDigitEnableInterleaved2Of5USS = 0xD9,
  CheckDigitEnableStandard2Of5OPCC = 0xDA,
  CheckDigitEnableStandard2Of5USS = 0xDB,
  CheckDigitEnableOneMSIPlessey = 0xDC,
  CheckDigitEnableTwoMSIPlessey = 0xDD,
  CheckDigitCodabarEnable = 0xDE,
  CheckDigitCode39Enable = 0xDF,
  TransmitCheckDigit = 0xF0,
  DisableCheckDigitTransmit = 0xF1,
  EnableCheckDigitTransmit = 0xF2,
  SymbologyIdentifier1 = 0xFB,
  SymbologyIdentifier2 = 0xFC,
  SymbologyIdentifier3 = 0xFD,
  DecodeData = 0xFE,
  DecodeDataContinued = 0xFF,
  BarSpaceData = 0x100,
  ScannerDataAccuracy = 0x101,
  RawDataPolarity = 0x102,
  PolarityInvertedBarCode = 0x103,
  PolarityNormalBarCode = 0x104,
  MinimumLengthToDecode = 0x106,
  MaximumLengthToDecode = 0x107,
  DiscreteLengthsToDecode1 = 0x108,
  DiscreteLengthsToDecode2 = 0x109,
  DataLengthMethod = 0x10A,
  DLMethodReadAny = 0x10B,
  DLMethodCheckInRange = 0x10C,
  DLMethodCheckForDiscrete = 0x10D,
  AztecCode = 0x110,
  BC412 = 0x111,
  ChannelCode = 0x112,
  Code16 = 0x113,
  Code32 = 0x114,
  Code49 = 0x115,
  CodeOne = 0x116,
  Colorcode = 0x117,
  DataMatrix = 0x118,
  MaxiCode = 0x119,
  MicroPDF = 0x11A,
  PDF417 = 0x11B,
  PosiCode = 0x11C,
  QRCode = 0x11D,
  SuperCode = 0x11E,
  UltraCode = 0x11F,
  USD5 = 0x120,
  VeriCode = 0x121,
}