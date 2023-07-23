import { HIDDesc } from "./HIDDesc";
import { UsagePages } from "./UsagePages";


declare module "./HIDDesc" {
  export interface HIDDesc<Page extends UsagePages> {
    Usage<PageDesc extends Page[ keyof Page ] & number> ( page: PageDesc ): HIDDesc<Page>;
  }
}

HIDDesc.prototype.Usage = function ( page: any ) {
  this.desc.push( 0x09, page );
  return this;
}