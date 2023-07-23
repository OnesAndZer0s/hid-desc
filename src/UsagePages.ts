import { GenericDesktop } from "./usages/GenericDesktop";
import { SimulationControls } from "./usages/SimulationControls";
import { VRControls } from "./usages/VRControls";

export let UsagePages:
  {
    GenericDesktop: typeof GenericDesktop,
    SimulationControls: typeof SimulationControls,
    VRControls: typeof VRControls
  } = {
  GenericDesktop,
  SimulationControls,
  VRControls,
};
export type UsagePages = ( typeof UsagePages )[ keyof typeof UsagePages ];



// export const enum UsagePages {
//   SportControls = 0x04,
//   GameControls = 0x05,
//   GenericDeviceControls = 0x06,
//   KeyboardKeypad = 0x07,
//   LED = 0x08,
//   Button = 0x09,
//   Ordinal = 0x0A,
//   TelephonyDevice = 0x0B,
//   Consumer = 0x0C,
//   Digitizer = 0x0D,
//   Haptics = 0x0E,
//   PhysicalInputDevice = 0x0F,
//   Unicode = 0x10,
//   SoC = 0x11,
//   EyeAndHeadTracker = 0x12,
//   AuxiliaryDisplay = 0x14,
//   Sensor = 0x20,
//   MedicalInstrument = 0x40,
//   BrailleDisplay = 0x41,
//   Lighting = 0x59,
//   Monitor = 0x80,
//   MonitorEnumerated = 0x81,
//   VESAVirtualControls = 0x82,
//   Power = 0x84,
//   BatterySystem = 0x85,
//   BarcodeScanner = 0x8C,
//   Scales = 0x8D,
//   MagneticStripeReader = 0x8E,
//   CameraControl = 0x90,
//   Arcade = 0x91,
//   GamingDevice = 0x92,
//   FIDOAlliance = 0xF1D0
// };