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
import { CollectionType, FieldDesc, HIDDesc, UsagePages } from 'hid-desc';

// Define a basic HID Descriptor for a mouse
const desc = new HIDDesc()
  .UsagePage( UsagePages.GenericDesktop )
  .Usage( UsagePages.GenericDesktop.Mouse )
    .Collection( CollectionType.Application )
    .Usage( UsagePages.GenericDesktop.Pointer )
      .Collection( CollectionType.Physical )
      .UsagePage( UsagePages.Button )
      .UsageMinimum( 1 )
      .UsageMaximum( 3 )
      .LogicalMinimum( 0 )
      .LogicalMaximum( 1 )
      .ReportCount( 3 )
      .ReportSize( 1 )
      .Input( FieldDesc.Data | FieldDesc.Variable | FieldDesc.Absolute )
      .ReportCount( 1 )
      .ReportSize( 5 )
      .Input( FieldDesc.Constant | FieldDesc.Variable | FieldDesc.Absolute )
      .UsagePage( UsagePages.GenericDesktop )
      .Usage( UsagePages.GenericDesktop.X )
      .Usage( UsagePages.GenericDesktop.Y )
      .LogicalMinimum( -127 )
      .LogicalMaximum( 127 )
      .ReportSize( 8 )
      .ReportCount( 2 )
      .Input( FieldDesc.Data | FieldDesc.Variable | FieldDesc.Relative )
      .EndCollection()
    .EndCollection();

// Your code to interact with the HID Descriptor goes here
// ...

```

## Documentation

https://onesandzer0s.github.io/hid-desc/


## Resources
* [HID Descriptor Tool](https://eleccelerator.com/usbdescreqparser/)
* [Device Class Definition for Human Interface Devices](https://www.usb.org/sites/default/files/hid1_11.pdf)
* [HID Usage Tables](https://usb.org/sites/default/files/hut1_4.pdf) ( but this is the thing that the library implemented )

## TODO
- [x] Add documentation
- [ ] Add a way to parse HID Descriptor from a binary array
- [ ] Add a way to generate a HID Report from a HID Descriptor
- [ ] Add Physical Descriptors
