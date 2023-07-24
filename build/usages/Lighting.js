"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lighting = void 0;
var Lighting;
(function (Lighting) {
    Lighting.UsagePage = () => 0x59;
})(Lighting = exports.Lighting || (exports.Lighting = {}));
(function (Lighting) {
    Lighting[Lighting["LampArray"] = 1] = "LampArray";
    Lighting[Lighting["LampArrayAttributesReport"] = 2] = "LampArrayAttributesReport";
    Lighting[Lighting["LampCount"] = 3] = "LampCount";
    Lighting[Lighting["BoundingBoxWidthInMicrometers"] = 4] = "BoundingBoxWidthInMicrometers";
    Lighting[Lighting["BoundingBoxHeightInMicrometers"] = 5] = "BoundingBoxHeightInMicrometers";
    Lighting[Lighting["BoundingBoxDepthInMicrometers"] = 6] = "BoundingBoxDepthInMicrometers";
    Lighting[Lighting["LampArrayKind"] = 7] = "LampArrayKind";
    Lighting[Lighting["MinUpdateIntervalInMicroseconds"] = 8] = "MinUpdateIntervalInMicroseconds";
    Lighting[Lighting["LampAttributesRequestReport"] = 32] = "LampAttributesRequestReport";
    Lighting[Lighting["LampID"] = 33] = "LampID";
    Lighting[Lighting["LampAttributesResponseReport"] = 34] = "LampAttributesResponseReport";
    Lighting[Lighting["PositionXInMicrometers"] = 35] = "PositionXInMicrometers";
    Lighting[Lighting["PositionYInMicrometers"] = 36] = "PositionYInMicrometers";
    Lighting[Lighting["PositionZInMicrometers"] = 37] = "PositionZInMicrometers";
    Lighting[Lighting["LampPurposes"] = 38] = "LampPurposes";
    Lighting[Lighting["UpdateLatencyInMicroseconds"] = 39] = "UpdateLatencyInMicroseconds";
    Lighting[Lighting["RedLevelCount"] = 40] = "RedLevelCount";
    Lighting[Lighting["GreenLevelCount"] = 41] = "GreenLevelCount";
    Lighting[Lighting["BlueLevelCount"] = 42] = "BlueLevelCount";
    Lighting[Lighting["IntensityLevelCount"] = 43] = "IntensityLevelCount";
    Lighting[Lighting["IsProgrammable"] = 44] = "IsProgrammable";
    Lighting[Lighting["InputBinding"] = 45] = "InputBinding";
    Lighting[Lighting["LampMultiUpdateReport"] = 80] = "LampMultiUpdateReport";
    Lighting[Lighting["RedUpdateChannel"] = 81] = "RedUpdateChannel";
    Lighting[Lighting["GreenUpdateChannel"] = 82] = "GreenUpdateChannel";
    Lighting[Lighting["BlueUpdateChannel"] = 83] = "BlueUpdateChannel";
    Lighting[Lighting["IntensityUpdateChannel"] = 84] = "IntensityUpdateChannel";
    Lighting[Lighting["LampUpdateFlags"] = 85] = "LampUpdateFlags";
    Lighting[Lighting["LampArrayControlReport"] = 112] = "LampArrayControlReport";
    Lighting[Lighting["AutonomousMode"] = 113] = "AutonomousMode";
})(Lighting = exports.Lighting || (exports.Lighting = {}));