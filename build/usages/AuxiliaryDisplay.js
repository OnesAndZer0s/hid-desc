"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuxiliaryDisplay = void 0;
var AuxiliaryDisplay;
(function (AuxiliaryDisplay) {
    AuxiliaryDisplay.UsagePage = () => 0x14;
})(AuxiliaryDisplay = exports.AuxiliaryDisplay || (exports.AuxiliaryDisplay = {}));
(function (AuxiliaryDisplay) {
    AuxiliaryDisplay[AuxiliaryDisplay["AlphanumericDisplay"] = 1] = "AlphanumericDisplay";
    AuxiliaryDisplay[AuxiliaryDisplay["AuxiliaryDisplay"] = 2] = "AuxiliaryDisplay";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayAttributesReport"] = 32] = "DisplayAttributesReport";
    AuxiliaryDisplay[AuxiliaryDisplay["ASCIICharacterSet"] = 33] = "ASCIICharacterSet";
    AuxiliaryDisplay[AuxiliaryDisplay["DataReadBack"] = 34] = "DataReadBack";
    AuxiliaryDisplay[AuxiliaryDisplay["FontReadBack"] = 35] = "FontReadBack";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayControlReport"] = 36] = "DisplayControlReport";
    AuxiliaryDisplay[AuxiliaryDisplay["ClearDisplay"] = 37] = "ClearDisplay";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayEnable"] = 38] = "DisplayEnable";
    AuxiliaryDisplay[AuxiliaryDisplay["ScreenSaverDelay"] = 39] = "ScreenSaverDelay";
    AuxiliaryDisplay[AuxiliaryDisplay["ScreenSaverEnable"] = 40] = "ScreenSaverEnable";
    AuxiliaryDisplay[AuxiliaryDisplay["VerticalScroll"] = 41] = "VerticalScroll";
    AuxiliaryDisplay[AuxiliaryDisplay["HorizontalScroll"] = 42] = "HorizontalScroll";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterReport"] = 43] = "CharacterReport";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayData"] = 44] = "DisplayData";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayStatus"] = 45] = "DisplayStatus";
    AuxiliaryDisplay[AuxiliaryDisplay["StatNotReady"] = 46] = "StatNotReady";
    AuxiliaryDisplay[AuxiliaryDisplay["StatReady"] = 47] = "StatReady";
    AuxiliaryDisplay[AuxiliaryDisplay["ErrNotALoadableCharacter"] = 48] = "ErrNotALoadableCharacter";
    AuxiliaryDisplay[AuxiliaryDisplay["ErrFontDataCannotBeRead"] = 49] = "ErrFontDataCannotBeRead";
    AuxiliaryDisplay[AuxiliaryDisplay["CursorPositionReport"] = 50] = "CursorPositionReport";
    AuxiliaryDisplay[AuxiliaryDisplay["Row"] = 51] = "Row";
    AuxiliaryDisplay[AuxiliaryDisplay["Column"] = 52] = "Column";
    AuxiliaryDisplay[AuxiliaryDisplay["Rows"] = 53] = "Rows";
    AuxiliaryDisplay[AuxiliaryDisplay["Columns"] = 54] = "Columns";
    AuxiliaryDisplay[AuxiliaryDisplay["CursorPixelPositioning"] = 55] = "CursorPixelPositioning";
    AuxiliaryDisplay[AuxiliaryDisplay["CursorMode"] = 56] = "CursorMode";
    AuxiliaryDisplay[AuxiliaryDisplay["CursorEnable"] = 57] = "CursorEnable";
    AuxiliaryDisplay[AuxiliaryDisplay["CursorBlink"] = 58] = "CursorBlink";
    AuxiliaryDisplay[AuxiliaryDisplay["FontReport"] = 59] = "FontReport";
    AuxiliaryDisplay[AuxiliaryDisplay["FontData"] = 60] = "FontData";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterWidth"] = 61] = "CharacterWidth";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterHeight"] = 62] = "CharacterHeight";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterSpacingHorizontal"] = 63] = "CharacterSpacingHorizontal";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterSpacingVertical"] = 64] = "CharacterSpacingVertical";
    AuxiliaryDisplay[AuxiliaryDisplay["UnicodeCharacterSet"] = 65] = "UnicodeCharacterSet";
    AuxiliaryDisplay[AuxiliaryDisplay["Font7Segment"] = 66] = "Font7Segment";
    AuxiliaryDisplay[AuxiliaryDisplay["SevenSegmentDirectMap"] = 67] = "SevenSegmentDirectMap";
    AuxiliaryDisplay[AuxiliaryDisplay["Font14Segment"] = 68] = "Font14Segment";
    AuxiliaryDisplay[AuxiliaryDisplay["FourteenSegmentDirectMap"] = 69] = "FourteenSegmentDirectMap";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayBrightness"] = 70] = "DisplayBrightness";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayContrast"] = 71] = "DisplayContrast";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterAttribute"] = 72] = "CharacterAttribute";
    AuxiliaryDisplay[AuxiliaryDisplay["AttributeReadback"] = 73] = "AttributeReadback";
    AuxiliaryDisplay[AuxiliaryDisplay["AttributeData"] = 74] = "AttributeData";
    AuxiliaryDisplay[AuxiliaryDisplay["CharAttributeEnhance"] = 75] = "CharAttributeEnhance";
    AuxiliaryDisplay[AuxiliaryDisplay["CharAttributeUnderline"] = 76] = "CharAttributeUnderline";
    AuxiliaryDisplay[AuxiliaryDisplay["CharAttributeBlink"] = 77] = "CharAttributeBlink";
    AuxiliaryDisplay[AuxiliaryDisplay["BitmapSizeX"] = 128] = "BitmapSizeX";
    AuxiliaryDisplay[AuxiliaryDisplay["BitmapSizeY"] = 129] = "BitmapSizeY";
    AuxiliaryDisplay[AuxiliaryDisplay["MaxBlitSize"] = 130] = "MaxBlitSize";
    AuxiliaryDisplay[AuxiliaryDisplay["BitDepthFormat"] = 131] = "BitDepthFormat";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayOrientation"] = 132] = "DisplayOrientation";
    AuxiliaryDisplay[AuxiliaryDisplay["PaletteReport"] = 133] = "PaletteReport";
    AuxiliaryDisplay[AuxiliaryDisplay["PaletteDataSize"] = 134] = "PaletteDataSize";
    AuxiliaryDisplay[AuxiliaryDisplay["PaletteDataOffset"] = 135] = "PaletteDataOffset";
    AuxiliaryDisplay[AuxiliaryDisplay["PaletteData"] = 136] = "PaletteData";
    AuxiliaryDisplay[AuxiliaryDisplay["BlitReport"] = 138] = "BlitReport";
    AuxiliaryDisplay[AuxiliaryDisplay["BlitRectangleX1"] = 139] = "BlitRectangleX1";
    AuxiliaryDisplay[AuxiliaryDisplay["BlitRectangleY1"] = 140] = "BlitRectangleY1";
    AuxiliaryDisplay[AuxiliaryDisplay["BlitRectangleX2"] = 141] = "BlitRectangleX2";
    AuxiliaryDisplay[AuxiliaryDisplay["BlitRectangleY2"] = 142] = "BlitRectangleY2";
    AuxiliaryDisplay[AuxiliaryDisplay["BlitData"] = 143] = "BlitData";
    AuxiliaryDisplay[AuxiliaryDisplay["SoftButton"] = 144] = "SoftButton";
    AuxiliaryDisplay[AuxiliaryDisplay["SoftButtonID"] = 145] = "SoftButtonID";
    AuxiliaryDisplay[AuxiliaryDisplay["SoftButtonSide"] = 146] = "SoftButtonSide";
    AuxiliaryDisplay[AuxiliaryDisplay["SoftButtonOffset1"] = 147] = "SoftButtonOffset1";
    AuxiliaryDisplay[AuxiliaryDisplay["SoftButtonOffset2"] = 148] = "SoftButtonOffset2";
    AuxiliaryDisplay[AuxiliaryDisplay["SoftButtonReport"] = 149] = "SoftButtonReport";
    AuxiliaryDisplay[AuxiliaryDisplay["SoftKeys"] = 194] = "SoftKeys";
    AuxiliaryDisplay[AuxiliaryDisplay["DisplayDataExtensions"] = 204] = "DisplayDataExtensions";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterMapping"] = 207] = "CharacterMapping";
    AuxiliaryDisplay[AuxiliaryDisplay["UnicodeEquivalent"] = 208] = "UnicodeEquivalent";
    AuxiliaryDisplay[AuxiliaryDisplay["CharacterPageMapping"] = 223] = "CharacterPageMapping";
    AuxiliaryDisplay[AuxiliaryDisplay["RequestReport"] = 255] = "RequestReport";
})(AuxiliaryDisplay = exports.AuxiliaryDisplay || (exports.AuxiliaryDisplay = {}));
