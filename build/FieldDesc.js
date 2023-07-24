"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldDesc = void 0;
var FieldDesc;
(function (FieldDesc) {
    /**Data indicates the item is defining report
  fields that contain modifiable device data */
    FieldDesc[FieldDesc["Data"] = 0] = "Data";
    /**Constant
  indicates the item is a static read-only field in a
  report and cannot be modified (written) by the
  host. */
    FieldDesc[FieldDesc["Constant"] = 1] = "Constant";
    /**An array provides an alternate means for
  describing the data returned from a group of
  buttons. Arrays are more efficient, if less flexible
  than variable items. Rather than returning a single
  bit for each button in the group, an array returns an
  index in each field that corresponds to the pressed
  button (like keyboard scan codes). An out-of range
  value in and array field is considered no controls
  asserted. Buttons or keys in an array that are
  simultaneously pressed need to be reported in
  multiple fields. Therefore, the number of fields in
  an array input item (Report Count) dictates the
  maximum number of simultaneous controls that
  can be reported. A keyboard could report up to
  three simultaneous keys using an array with three
  8-bit fields (Report Size = 8, Report Count = 3).
  Logical Minimum specifies the lowest index value
  returned by the array and Logical Maximum
  specifies the largest. The number of elements in the
  array can be deduced by examining the difference
  between Logical Minimum and Logical Maximum
  (number of elements = Logical Maximum -
  Logical Minimum + 1).
   */
    FieldDesc[FieldDesc["Array"] = 0] = "Array";
    /** In variable fields, each field
  represents data from a physical control. The
  number of bits reserved for each field is
  determined by preceding Report Size/Report Count
  items. For example, a bank of eight on/off switches
  could be reported in 1 byte declared by a variable
  Input item where each bit represents one switch, on
  (1) or off (0) (Report Size = 1, Report Count = 8).
  Alternatively, a variable Input item could add 1
  report byte used to represent the state of four threeposition buttons, where the state of each button is
  represented by two bits (Report Size = 2, Report
  Count = 4). Or 1 byte from a variable Input item
  could represent the x position of a joystick (Report
  Size = 8, Report Count = 1). */
    FieldDesc[FieldDesc["Variable"] = 2] = "Variable";
    /**Indicates whether the data is absolute (based on a
  fixed origin) or relative (indicating the change in
  value from the last report). Mouse devices usually
  provide relative data, while tablets usually provide
  absolute data. */
    FieldDesc[FieldDesc["Absolute"] = 0] = "Absolute";
    /**Indicates whether the data is absolute (based on a
  fixed origin) or relative (indicating the change in
  value from the last report). Mouse devices usually
  provide relative data, while tablets usually provide
  absolute data. */
    FieldDesc[FieldDesc["Relative"] = 4] = "Relative";
    /**Indicates whether the data “rolls over” when
  reaching either the extreme high or low value. For
  example, a dial that can spin freely 360 degrees
  might output values from 0 to 10. If Wrap is
  indicated, the next value reported after passing the
  10 position in the increasing direction would be 0. */
    FieldDesc[FieldDesc["NoWrap"] = 0] = "NoWrap";
    /**Indicates whether the data “rolls over” when
  reaching either the extreme high or low value. For
  example, a dial that can spin freely 360 degrees
  might output values from 0 to 10. If Wrap is
  indicated, the next value reported after passing the
  10 position in the increasing direction would be 0. */
    FieldDesc[FieldDesc["Wrap"] = 8] = "Wrap";
    /**Indicates whether the raw data from the device has
  been processed in some way, and no longer
  represents a linear relationship between what is
  measured and the data that is reported.
  Acceleration curves and joystick dead zones are
  examples of this kind of data. Sensitivity settings
  would affect the Units item, but the data would still
  be linear. */
    FieldDesc[FieldDesc["Linear"] = 0] = "Linear";
    /**Indicates whether the raw data from the device has
  been processed in some way, and no longer
  represents a linear relationship between what is
  measured and the data that is reported.
  Acceleration curves and joystick dead zones are
  examples of this kind of data. Sensitivity settings
  would affect the Units item, but the data would still
  be linear. */
    FieldDesc[FieldDesc["NonLinear"] = 16] = "NonLinear";
    /**Indicates whether the control has a preferred state
  to which it will return when the user is not
  physically interacting with the control. Push
  buttons (as opposed to toggle buttons) and selfcentering joysticks are examples. */
    FieldDesc[FieldDesc["PreferredState"] = 0] = "PreferredState";
    /**Indicates whether the control has a preferred state
  to which it will return when the user is not
  physically interacting with the control. Push
  buttons (as opposed to toggle buttons) and selfcentering joysticks are examples. */
    FieldDesc[FieldDesc["NoPreferred"] = 32] = "NoPreferred";
    /**Indicates whether the control has a state in which it
  is not sending meaningful data. One possible use of
  the null state is for controls that require the user to
  physically interact with the control in order for it to
  report useful data. For example, some joysticks
  have a multidirectional switch (a hat switch).
  When a hat switch is not being pressed it is in a
  null state. When in a null state, the control will
  report a value outside of the specified Logical
  Minimum and Logical Maximum (the most
  negative value, such as -128 for an 8-bit value). */
    FieldDesc[FieldDesc["NoNullPos"] = 0] = "NoNullPos";
    /**Indicates whether the control has a state in which it
  is not sending meaningful data. One possible use of
  the null state is for controls that require the user to
  physically interact with the control in order for it to
  report useful data. For example, some joysticks
  have a multidirectional switch (a hat switch).
  When a hat switch is not being pressed it is in a
  null state. When in a null state, the control will
  report a value outside of the specified Logical
  Minimum and Logical Maximum (the most
  negative value, such as -128 for an 8-bit value). */
    FieldDesc[FieldDesc["NullState"] = 64] = "NullState";
    /**Indicates whether the Feature or Output control's
  value should be changed by the host or not.
  Volatile output can change with or without host
  interaction. To avoid synchronization problems,
  volatile controls should be relative whenever
  possible. If volatile output is absolute, when
  issuing a Set Report (Output), request set the value
  of any control you don't want to change to a value
  outside of the specified Logical Minimum and
  Logical Maximum (the most negative value, such
  as -128 for an 8-bit value). Invalid output to a
  control is ignored by the device */
    FieldDesc[FieldDesc["NonVolatile"] = 0] = "NonVolatile";
    /**Indicates whether the Feature or Output control's
  value should be changed by the host or not.
  Volatile output can change with or without host
  interaction. To avoid synchronization problems,
  volatile controls should be relative whenever
  possible. If volatile output is absolute, when
  issuing a Set Report (Output), request set the value
  of any control you don't want to change to a value
  outside of the specified Logical Minimum and
  Logical Maximum (the most negative value, such
  as -128 for an 8-bit value). Invalid output to a
  control is ignored by the device */
    FieldDesc[FieldDesc["Volatile"] = 128] = "Volatile";
    /**Indicates that the control emits a fixed-sizestream
  of bytes. The contents of the data field are
  determined by the application. The contents of the
  buffer are not interpreted as a single numeric
  quantity. Report data defined by a Buffered Bytes
  item must be aligned on an 8-bit boundary. The
  data from a bar code reader is an example. */
    FieldDesc[FieldDesc["BitField"] = 0] = "BitField";
    /**Indicates that the control emits a fixed-sizestream
  of bytes. The contents of the data field are
  determined by the application. The contents of the
  buffer are not interpreted as a single numeric
  quantity. Report data defined by a Buffered Bytes
  item must be aligned on an 8-bit boundary. The
  data from a bar code reader is an example. */
    FieldDesc[FieldDesc["BufferedBytes"] = 256] = "BufferedBytes";
})(FieldDesc = exports.FieldDesc || (exports.FieldDesc = {}));
