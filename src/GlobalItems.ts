import { HIDDesc } from "./HIDDesc";
import { Unit } from "./Units";
import { UsagePages } from "./UsagePages";
import { ParseToHex } from "./util";

declare module "./HIDDesc" {
  export interface HIDDesc<Page extends UsagePages> {

    /**
      Unsigned integer specifying the current Usage
      Page. Since a usage are 32 bit values, Usage
      Page items can be used to conserve space in a
      report descriptor by setting the high order 16 bits
      of a subsequent usages. Any usage that follows
      which is defines 16 bits or less is interpreted as a
      Usage ID and concatenated with the Usage Page
      to form a 32 bit Usage.
    */
    UsagePage<Page extends UsagePages> ( page: Page ): HIDDesc<Page>;

    /**
      Extent value in logical units. This is the
    minimum value that a variable or array item will
    report. For example, a mouse reporting x
    position values from 0 to 128 would have a
    Logical Minimum of 0 and a Logical Maximum
    of 128.
    */
    LogicalMinimum ( min: number ): HIDDesc<Page>;

    /**
      Extent value in logical units. This is the
    maximum value that a variable or array item will
    report.
    */
    LogicalMaximum ( max: number ): HIDDesc<Page>;

    /**
      Minimum value for the physical extent of a
    variable item. This represents the Logical
    Minimum with units applied to it.
    */
    PhysicalMinimum ( min: number ): HIDDesc<Page>;

    /**
      Maximum value for the physical extent of a
    variable item.
    */
    PhysicalMaximum ( max: number ): HIDDesc<Page>;

    /**
      Value of the unit exponent in base.
    */
    UnitExponent ( exp: number ): HIDDesc<Page>;

    /**
      Unit values.
    */
    Unit ( unit: Unit ): HIDDesc<Page>;

    /**
      Unsigned integer specifying the size of the report
    fields in bits. This allows the parser to build an
    item map for the report handler to use
    */
    ReportSize ( size: number ): HIDDesc<Page>;

    /**
      Unsigned value that specifies the Report ID. If a
    Report ID tag is used anywhere in Report
    descriptor, all data reports for the device are
    preceded by a single byte ID field. All items
    succeeding the first Report ID tag but preceding
    a second Report ID tag are included in a report
    prefixed by a 1-byte ID. All items succeeding the
    second but preceding a third Report ID tag are
    included in a second report prefixed by a second
    ID, and so on.
    This Report ID value indicates the prefix added
    to a particular report. For example, a Report
    descriptor could define a 3-byte report with a
    Report ID of 01. This device would generate a
    4-byte data report in which the first byte is 01.
    The device may also generate other reports, each
    with a unique ID. This allows the host to
    distinguish different types of reports arriving
    over a single interrupt in pipe. And allows the
    device to distinguish different types of reports
    arriving over a single interrupt out pipe. Report
    ID zero is reserved and should not be used.
    */
    ReportID ( id: number ): HIDDesc<Page>;

    /**
      Unsigned integer specifying the number of data
    fields for the item; determines how many fields
    are included in the report for this particular item
    (and consequently how many bits are added to
    the report).
    */
    ReportCount ( count: number ): HIDDesc<Page>;

    /**
      Places a copy of the global item state table on
    the stack.
    */
    Push (): HIDDesc<Page>;

    /**
      Replaces the item state table with the top
    structure from the stack.
    */
    Pop (): HIDDesc<Page>;
  }
}

HIDDesc.prototype.UsagePage = function <Page extends UsagePages> ( page: Page ) {

  // despite being able to define size ( 0000 01nn ),
  // the only usage page that isn't one byte is the 
  // vendor defined pages and 0xFIDO.
  this.desc.push( ...ParseToHex( 0x04, page.UsagePage() ) );
  return this as unknown as HIDDesc<Page>;
}

HIDDesc.prototype.ReportSize = function ( size: number ) {
  this.desc.push( ...ParseToHex( 0x74, size ) );
  return this;
}

HIDDesc.prototype.ReportID = function ( id: number ) {
  this.desc.push( ...ParseToHex( 0x84, id ) );

  return this;
}

HIDDesc.prototype.ReportCount = function ( count: number ) {
  this.desc.push( ...ParseToHex( 0x94, count ) );
  return this;
}

HIDDesc.prototype.LogicalMinimum = function ( min: number ) {
  this.desc.push( ...ParseToHex( 0x14, min, true ) );
  return this;
}

HIDDesc.prototype.LogicalMaximum = function ( max: number ) {
  this.desc.push( ...ParseToHex( 0x24, max, true ) );
  return this;
}

HIDDesc.prototype.PhysicalMinimum = function ( min: number ) {
  this.desc.push( ...ParseToHex( 0x34, min, true ) );
  return this;
}

HIDDesc.prototype.PhysicalMaximum = function ( max: number ) {
  this.desc.push( ...ParseToHex( 0x44, max, true ) );
  return this;
}

HIDDesc.prototype.Push = function () {
  this.desc.push( 0xA4 );
  return this;
}

HIDDesc.prototype.Pop = function () {
  this.desc.push( 0xB4 );
  return this;
}

HIDDesc.prototype.UnitExponent = function ( exp: number ) {
  this.desc.push( ...ParseToHex( 0x54, exp, true ) );
  return this;
}


HIDDesc.prototype.Unit = function ( unit: Unit ) {
  var val: any = [], bits = 4;
  val.push(
    unit.System ?? 0,
    unit.Length ?? 0,
    unit.Mass ?? 0,
    unit.Time ?? 0,
    unit.Temperature ?? 0,
    unit.Current ?? 0,
    unit.LuminousIntensity ?? 0 );
  val = parseInt( ( val.map(
    ( v: number ) => ( ( v < 0 ) ? v + 16 : v ).toString( 16 ) )
    .join( "" ) + "0" ).split( "" ).reverse().join( "" ), 16 );

  this.desc.push( ...ParseToHex( 0x64, val, true ) );
  return this;
}