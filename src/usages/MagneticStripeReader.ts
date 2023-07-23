export namespace MagneticStripeReader {
  export const UsagePage = () => 0x8E;
}

export enum MagneticStripeReader {
  MSRDeviceReadOnly = 0x01,
  Track1Length = 0x11,
  Track2Length = 0x12,
  Track3Length = 0x13,
  TrackJISLength = 0x14,
  TrackData = 0x20,
  Track1Data = 0x21,
  Track2Data = 0x22,
  Track3Data = 0x23,
  TrackJISData = 0x24,
}