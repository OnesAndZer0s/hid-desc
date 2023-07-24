export interface Unit {
  System?: Unit.System;
  Length?: Unit.Length;
  Mass?: Unit.Mass;
  Time?: Unit.Time | number;
  Temperature?: Unit.Temperature | number;
  Current?: Unit.Current | number;
  LuminousIntensity?: Unit.LuminousIntensity | number;
}



export namespace Unit {
  export enum System {
    None = 0x00,
    SILinear = 0x01,
    SIRotation = 0x02,
    EnglishLinear = 0x03,
    EnglishRotation = 0x04,
  }

  export enum Length {
    None = 0x00,
    Centimeter = 0x01,
    Radian = 0x02,
    Inch = 0x03,
    Degree = 0x04,
  }

  export enum Mass {
    None = 0x00,
    Gram = 0x01,
    Slug = 0x03,
  }


  export enum Time {
    None = 0x00,
    Second = 0x01,
  }

  export enum Temperature {
    None = 0x00,
    Kelvin = 0x01,
    Fahrenheit = 0x03,
  }

  export enum Current {
    None = 0x00,
    Ampere = 0x01,
  }

  export enum LuminousIntensity {
    None = 0x00,
    Candela = 0x01,
  }
};