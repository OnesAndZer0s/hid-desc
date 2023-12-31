export namespace Digitizer {
  export const UsagePage = () => 0x0D;
}

export enum Digitizer {
  Digitizer = 0x01,
  Pen = 0x02,
  LightPen = 0x03,
  TouchScreen = 0x04,
  TouchPad = 0x05,
  WhiteBoard = 0x06,
  CoordinateMeasuringMachine = 0x07,
  ThreeDDigitizer = 0x08,
  StereoPlotter = 0x09,
  ArticulatedArm = 0x0A,
  Armature = 0x0B,
  MultiplePointDigitizer = 0x0C,
  FreeSpaceWand = 0x0D,
  DeviceConfiguration = 0x0E,
  CapacitiveHeatMapDigitizer = 0x0F,
  Stylus = 0x20,
  Puck = 0x21,
  Finger = 0x22,
  DeviceSettings = 0x23,
  CharacterGesture = 0x24,
  TipPressure = 0x30,
  BarrelPressure = 0x31,
  InRange = 0x32,
  Touch = 0x33,
  Untouch = 0x34,
  Tap = 0x35,
  Quality = 0x36,
  DataValid = 0x37,
  TransducerIndex = 0x38,
  TabletFunctionKeys = 0x39,
  ProgramChangeKeys = 0x3A,
  BatteryStrength = 0x3B,
  Invert = 0x3C,
  XTilt = 0x3D,
  YTilt = 0x3E,
  Azimuth = 0x3F,
  Altitude = 0x40,
  Twist = 0x41,
  TipSwitch = 0x42,
  SecondaryTipSwitch = 0x43,
  BarrelSwitch = 0x44,
  Eraser = 0x45,
  TabletPick = 0x46,
  TouchValid = 0x47,
  Width = 0x48,
  Height = 0x49,
  ContactIdentifier = 0x51,
  DeviceMode = 0x52,
  DeviceIdentifier = 0x53,
  ContactCount = 0x54,
  ContactCountMaximum = 0x55,
  ScanTime = 0x56,
  SurfaceSwitch = 0x57,
  ButtonSwitch = 0x58,
  PadType = 0x59,
  SecondaryBarrelSwitch = 0x5A,
  TransducerSerialNumber = 0x5B,
  PreferredColor = 0x5C,
  PreferredColorIsLocked = 0x5D,
  PreferredLineWidth = 0x5E,
  PreferredLineWidthIsLocked = 0x5F,
  LatencyMode = 0x60,
  GestureCharacterQuality = 0x61,
  CharacterGestureDataLength = 0x62,
  CharacterGestureData = 0x63,
  GestureCharacterEncoding = 0x64,
  UTF8CharacterEncoding = 0x65,
  UTF16LittleEndianCharacterGestureEncoding = 0x66,
  UTF16BigEndianCharacterGestureEncoding = 0x67,
  UTF32LittleEndianCharacterGestureEncoding = 0x68,
  UTF32BigEndianCharacterGestureEncoding = 0x69,
  CapacitiveHeatMapProtocolVendorID = 0x6A,
  CapacitiveHeatMapProtocolVersion = 0x6B,
  CapacitiveHeatMapFrameData = 0x6C,
  GestureCharacterEnabled = 0x6D,
  TransducerSerialNumberPart2 = 0x6E,
  NoPreferredColor = 0x6F,
  PreferredLineStyle = 0x70,
  PreferredLineStyleIsLocked = 0x71,
  Ink = 0x72,
  Pencil = 0x73,
  Highlighter = 0x74,
  ChiselMarker = 0x75,
  Brush = 0x76,
  NoPreference = 0x77,
  DigitizerDiagnostic = 0x80,
  DigitizerError = 0x81,
  ErrNormalStatus = 0x82,
  ErrTransducersExceeded = 0x83,
  ErrFullTransFeaturesUnavailable = 0x84,
  ErrChargeLow = 0x85,
  TransducerSoftwareInfo = 0x90,
  TransducerVendorID = 0x91,
  TransducerProductID = 0x92,
  DeviceSupportedProtocols = 0x93,
  TransducerSupportedProtocols = 0x94,
  NoProtocol = 0x95,
  WacomAESProtocol = 0x96,
  USIProtocol = 0x97,
  MicrosoftPenProtocol = 0x98,
  SupportedReportRates = 0xA0,
  ReportRate = 0xA1,
  TransducerConnected = 0xA2,
  SwitchDisabled = 0xA3,
  SwitchUnimplemented = 0xA4,
  TransducerSwitches = 0xA5,
  TransducerIndexSelector = 0xA6,
  ButtonPressThreshold = 0xB0,
}