"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
var Unit;
(function (Unit) {
    let System;
    (function (System) {
        System[System["None"] = 0] = "None";
        System[System["SILinear"] = 1] = "SILinear";
        System[System["SIRotation"] = 2] = "SIRotation";
        System[System["EnglishLinear"] = 3] = "EnglishLinear";
        System[System["EnglishRotation"] = 4] = "EnglishRotation";
    })(System = Unit.System || (Unit.System = {}));
    let Length;
    (function (Length) {
        Length[Length["None"] = 0] = "None";
        Length[Length["Centimeter"] = 1] = "Centimeter";
        Length[Length["Radian"] = 2] = "Radian";
        Length[Length["Inch"] = 3] = "Inch";
        Length[Length["Degree"] = 4] = "Degree";
    })(Length = Unit.Length || (Unit.Length = {}));
    let Mass;
    (function (Mass) {
        Mass[Mass["None"] = 0] = "None";
        Mass[Mass["Gram"] = 1] = "Gram";
        Mass[Mass["Slug"] = 3] = "Slug";
    })(Mass = Unit.Mass || (Unit.Mass = {}));
    let Time;
    (function (Time) {
        Time[Time["None"] = 0] = "None";
        Time[Time["Second"] = 1] = "Second";
    })(Time = Unit.Time || (Unit.Time = {}));
    let Temperature;
    (function (Temperature) {
        Temperature[Temperature["None"] = 0] = "None";
        Temperature[Temperature["Kelvin"] = 1] = "Kelvin";
        Temperature[Temperature["Fahrenheit"] = 3] = "Fahrenheit";
    })(Temperature = Unit.Temperature || (Unit.Temperature = {}));
    let Current;
    (function (Current) {
        Current[Current["None"] = 0] = "None";
        Current[Current["Ampere"] = 1] = "Ampere";
    })(Current = Unit.Current || (Unit.Current = {}));
    let LuminousIntensity;
    (function (LuminousIntensity) {
        LuminousIntensity[LuminousIntensity["None"] = 0] = "None";
        LuminousIntensity[LuminousIntensity["Candela"] = 1] = "Candela";
    })(LuminousIntensity = Unit.LuminousIntensity || (Unit.LuminousIntensity = {}));
})(Unit = exports.Unit || (exports.Unit = {}));
;
