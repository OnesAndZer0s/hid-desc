import { Arcade } from "./usages/Arcade";
import { AuxiliaryDisplay } from "./usages/AuxiliaryDisplay";
import { BarcodeScanner } from "./usages/BarcodeScanner";
import { BatterySystem } from "./usages/BatterySystem";
import { BrailleDisplay } from "./usages/BrailleDisplay";
import { Button } from "./usages/Button";
import { CameraControl } from "./usages/CameraControl";
import { Consumer } from "./usages/Consumer";
import { Digitizer } from "./usages/Digitizer";
import { EyeAndHeadTracker } from "./usages/EyeAndHeadTrackers";
import { FIDOAlliance } from "./usages/FIDOAlliance";
import { GameControls } from "./usages/GameControls";
import { GamingDevice } from "./usages/GamingDevice";
import { GenericDesktop } from "./usages/GenericDesktop";
import { GenericDevice } from "./usages/GenericDevice";
import { Haptics } from "./usages/Haptics";
import { KeyboardKeypad } from "./usages/KeyboardKeypad";
import { LED } from "./usages/LED";
import { Lighting } from "./usages/Lighting";
import { MagneticStripeReader } from "./usages/MagneticStripeReader";
import { MedicalInstrument } from "./usages/MedicalInstrument";
import { Monitor } from "./usages/Monitor";
import { MonitorEnum } from "./usages/MonitorEnum";
import { Ordinal } from "./usages/Ordinal";
import { PhysicalInputDevice } from "./usages/PhysicalInputDevice";
import { Power } from "./usages/Power";
import { Scales } from "./usages/Scales";
import { Sensor } from "./usages/Sensor";
import { SimulationControls } from "./usages/SimulationControls";
import { SoC } from "./usages/SoC";
import { SportControls } from "./usages/SportControls";
import { TelephonyDevice } from "./usages/TelephonyDevice";
import { Unicode } from "./usages/Unicode";
import { VESAVirtualControls } from "./usages/VESAVirtualControls";
import { VRControls } from "./usages/VRControls";

export let UsagePages:
  {
    GenericDesktop: typeof GenericDesktop,
    SimulationControls: typeof SimulationControls,
    VRControls: typeof VRControls,
    SportControls: typeof SportControls,
    GameControls: typeof GameControls,
    GenericDevice: typeof GenericDevice,
    KeyboardKeypad: typeof KeyboardKeypad,
    LED: typeof LED,
    Button: typeof Button,
    Ordinal: typeof Ordinal,
    TelephonyDevice: typeof TelephonyDevice,
    Consumer: typeof Consumer,
    Digitizer: typeof Digitizer,
    Haptics: typeof Haptics,
    PhysicalInputDevice: typeof PhysicalInputDevice,
    Unicode: typeof Unicode,
    SoC: typeof SoC,
    EyeAndHeadTracker: typeof EyeAndHeadTracker,
    AuxiliaryDisplay: typeof AuxiliaryDisplay,
    Sensor: typeof Sensor,
    MedicalInstrument: typeof MedicalInstrument,
    BrailleDisplay: typeof BrailleDisplay,
    Lighting: typeof Lighting,
    Monitor: typeof Monitor,
    MonitorEnum: typeof MonitorEnum,
    VESAVirtualControls: typeof VESAVirtualControls,
    Power: typeof Power,
    BatterySystem: typeof BatterySystem,
    BarcodeScanner: typeof BarcodeScanner,
    Scales: typeof Scales,
    MagneticStripeReader: typeof MagneticStripeReader,
    CameraControl: typeof CameraControl,
    Arcade: typeof Arcade,
    GamingDevice: typeof GamingDevice,
    FIDOAlliance: typeof FIDOAlliance,
  } = {
  GenericDesktop,
  SimulationControls,
  VRControls,
  SportControls,
  GameControls,
  GenericDevice,
  KeyboardKeypad,
  LED,
  Button,
  Ordinal,
  TelephonyDevice,
  Consumer,
  Digitizer,
  Haptics,
  PhysicalInputDevice,
  Unicode,
  SoC,
  EyeAndHeadTracker,
  AuxiliaryDisplay,
  Sensor,
  MedicalInstrument,
  BrailleDisplay,
  Lighting,
  Monitor,
  MonitorEnum,
  VESAVirtualControls,
  Power,
  BatterySystem,
  BarcodeScanner,
  Scales,
  MagneticStripeReader,
  CameraControl,
  Arcade,
  GamingDevice,
  FIDOAlliance,

};
export type UsagePages = ( typeof UsagePages )[ keyof typeof UsagePages ];

