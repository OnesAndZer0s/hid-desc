import { CollectionType } from "./CollectionType";
import { FieldDesc } from "./FieldDesc";
import { HIDDesc } from "./HIDDesc";
import { UsagePages } from "./UsagePages";
import { ParseToHex } from "./util";

declare module "./HIDDesc" {
  export interface HIDDesc<Page extends UsagePages> {
    /**
    A Collection item identifies a relationship between 
    two or more data (Input, Output, or Feature.) 
    */
    Collection ( collectionType: CollectionType ): HIDDesc<Page>;

    /* Closes an item collection. */
    EndCollection (): HIDDesc<Page>;

    /**
      An Input item describes information about the data provided by one or more
    physical controls. An application can use this information to interpret the data
    provided by the device. All data fields defined in a single item share an
    identical data format
    */
    Input ( desc: FieldDesc ): HIDDesc<Page>;

    /**
      The Output item is used to define an output data field in a report. This item is
    similar to an Input item except it describes data sent to the device—for
    example, LED states.
    */
    Output ( desc: FieldDesc ): HIDDesc<Page>;

    /**
      Feature items describe device configuration information that can be sent to
    the device.
    */
    Feature ( desc: FieldDesc ): HIDDesc<Page>;
  }
}

HIDDesc.prototype.Input = function ( desc: FieldDesc ) {
  this.desc.push( ...ParseToHex( 0x80, desc ) );
  return this;
}

HIDDesc.prototype.Output = function ( desc: FieldDesc ) {
  this.desc.push( ...ParseToHex( 0x90, desc ) );
  return this;
}

HIDDesc.prototype.Feature = function ( desc: FieldDesc ) {
  this.desc.push( ...ParseToHex( 0xB0, desc ) );
  return this;
}

HIDDesc.prototype.Collection = function ( collectionType: CollectionType ) {
  // despite being able to define size ( 1010 00nn ), 
  // collectionType is always clamped between 0x00-0xff
  this.desc.push( ...ParseToHex( 0xA0, collectionType ) );
  return this;
}

HIDDesc.prototype.EndCollection = function () {
  // this literally has no inputs, so I have no
  // idea why the spec says it can be 110000nn

  // like, dude. there is always going to be zero bytes of input
  this.desc.push( 0xc0 );
  return this;
}