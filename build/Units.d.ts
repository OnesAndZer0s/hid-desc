export interface Unit {
    System?: Unit.System;
    Length?: Unit.Length;
    Mass?: Unit.Mass;
    Time?: Unit.Time | number;
    Temperature?: Unit.Temperature | number;
    Current?: Unit.Current | number;
    LuminousIntensity?: Unit.LuminousIntensity | number;
}
export declare namespace Unit {
    enum System {
        None = 0,
        SILinear = 1,
        SIRotation = 2,
        EnglishLinear = 3,
        EnglishRotation = 4
    }
    enum Length {
        None = 0,
        Centimeter = 1,
        Radian = 2,
        Inch = 3,
        Degree = 4
    }
    enum Mass {
        None = 0,
        Gram = 1,
        Slug = 3
    }
    enum Time {
        None = 0,
        Second = 1
    }
    enum Temperature {
        None = 0,
        Kelvin = 1,
        Fahrenheit = 3
    }
    enum Current {
        None = 0,
        Ampere = 1
    }
    enum LuminousIntensity {
        None = 0,
        Candela = 1
    }
}
