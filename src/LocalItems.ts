import { HIDDesc } from "./HIDDesc";
import { UsagePages } from "./UsagePages";
import { ParseToHex } from "./util";


declare module "./HIDDesc" {
  export interface HIDDesc<Page extends UsagePages> {
    /**
      Usage index for an item usage; represents a
    suggested usage for the item or collection. In the
    case where an item represents multiple controls, a
    Usage tag may suggest a usage for every variable
    or element in an array.
    */
    Usage<PageDesc extends Page[ keyof Page ] & number> ( page: PageDesc ): HIDDesc<Page>;

    /**
      Defines the starting usage associated with an array
    or bitmap.
    */
    UsageMinimum ( min: number ): HIDDesc<Page>;

    /**
      Defines the ending usage associated with an array
    or bitmap.
    */
    UsageMaximum ( min: number ): HIDDesc<Page>;

    /**
      Determines the body part used for a control. Index
    points to a designator in the Physical descriptor.
    */
    // DesignatorIndex(): HIDDesc<Page>;

    /**
      Defines the index of the starting designator
    associated with an array or bitmap.
    */
    // DesignatorMinimum(): HIDDesc<Page>;

    /**
      Defines the index of the ending designator
    associated with an array or bitmap.
    */
    // DesignatorMaximum(): HIDDesc<Page>;

    /**
      String index for a String descriptor; allows a string
    to be associated with a particular item or control.
    */
    // StringIndex(): HIDDesc<Page>;

    /**
      Specifies the first string index when assigning a
    group of sequential strings to controls in an array
    or bitmap.
    */
    // StringMinimum(): HIDDesc<Page>;

    /**
      Specifies the last string index when assigning a
    group of sequential strings to controls in an array
    or bitmap.
    */
    // StringMaximum(): HIDDesc<Page>;

    /**
      Defines the beginning or end of a set of local items
    (true = open set, false = close set).
    */
    Delimiter ( open: boolean ): HIDDesc<Page>;
  }
}

HIDDesc.prototype.Usage = function ( page: any ) {
  this.desc.push( ...ParseToHex( 0x08, page ) );
  return this;
}

HIDDesc.prototype.Delimiter = function ( open: boolean ) {
  // despite being able to define size ( 1010 10nn ), 
  // open is a boolean.
  this.desc.push( 0xA9, open ? 0x01 : 0x00 );
  return this;
}

HIDDesc.prototype.UsageMinimum = function ( min: number ) {
  this.desc.push( ...ParseToHex( 0x18, min, true ) );
  return this;
}

HIDDesc.prototype.UsageMaximum = function ( max: number ) {
  this.desc.push( ...ParseToHex( 0x28, max, true ) );
  return this;
}
