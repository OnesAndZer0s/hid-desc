export namespace Monitor {
  export const UsagePage = () => 0x80;
}

export enum Monitor {
  MonitorControl = 0x01,
  EDIDInformation = 0x02,
  VDIFInformation = 0x03,
  VESAVersion = 0x04,
}