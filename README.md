# `hid-desc` - NodeJS HID Descriptors Library
[![npm version](https://badge.fury.io/js/hid-desc.svg)](https://badge.fury.io/js/hid-desc) [![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)](https://opensource.org/licenses/GNU)

`hid-desc` is a lightweight JavaScript library for working with HID (Human Interface Device) Descriptors. This library provides all symbols that are defined within the standard. Whether you're building custom HID devices or working with existing ones, `hid-desc` should simplifythe process of handling and understanding HID Descriptors.

## Installation

You can install `hid-desc` via npm:

```bash
npm install hid-desc
```

Alternatively, you can include it directly in your HTML file using a script tag:

```html
<script src="path/to/hid-desc.js"></script>
```

## Usage

To use `hid-desc`, simply include the library in your project and access the provided symbols. This library does not require any additional dependencies, making it easy to integrate into your existing codebase.

Here's a quick example of how you can use `hid-desc`:

```javascript
// Import the hid-desc library if using ES modules
import hD from 'hid-desc';

// Define a basic HID Descriptor for a custom device

let descriptor = new hD.HIDDescriptor()
  .UsagePage(hD.GenericDesktop)
  .Usage(hD.Joystick)
      .Collection(Application)
      .UsagePage(hD.GenericDesktop)
      .Usage(Pointer)
      .Collection(Physical)
          .LogicalMinimum(-127)
          .LogicalMaximum(127)
          .ReportSize(8)
          .ReportCount(2)
          .Push
          .Usage(X)
          .Usage(Y)
          .Input(Data, Variable, Absolute)
          .Usage(HatSwitch)
          .LogicalMinimum(0)
          .LogicalMaximum(3)
          .PhysicalMinimum(0)
          .PhysicalMaximum(270)
          .Unit(Degrees)
          .ReportCount(1)
          .ReportSize(4)
          .Input(Data, Variable, Absolute, Null State)
          .LogicalMinimum(0)
          .LogicalMaximum(1)
          .ReportCount(2)
          .ReportSize(1)
          .UsagePage(Buttons)
          .UsageMinimum(Button 1)
          .UsageMaximum(Button 2)
          .Unit(None)
          .Input(Data, Variable, Absolute)
      .EndCollection()
      .UsageMinimum(Button 3)
      .UsageMinimum(Button 4)
      .Input(Data, Variable, Absolute)
      .Pop()
      .Usage(Throttle)
      .ReportCount(1)
      .Input(Data, Variable, Absolute)
  .EndCollection();

// Your code to interact with the HID Descriptor goes here
// ...

```

## Documentation

N / A yet - coming soon!

## Resources
* [HID Descriptor Tool](https://eleccelerator.com/usbdescreqparser/)
* [Device Class Definition for Human Interface Devices](https://www.usb.org/sites/default/files/hid1_11.pdf)
* [HID Usage Tables](https://usb.org/sites/default/files/hut1_4.pdf) ( but this is the thing that the library implemented )

## TODO
- [ ] Add documentation
- [ ] Add a way to parse HID Descriptor from a binary array
- [ ] Add a way to generate HID Report from Descriptor?