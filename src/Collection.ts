import { CollectionType } from "./CollectionType";
import { HIDDesc } from "./HIDDesc";
import { UsagePages } from "./UsagePages";

declare module "./HIDDesc" {
  export interface HIDDesc<Page extends UsagePages> {
    Collection ( collectionType: CollectionType ): HIDDesc<Page>;
    EndCollection (): HIDDesc<Page>;
  }
}

HIDDesc.prototype.Collection = function ( collectionType: CollectionType ) {
  this.desc.push( 0xa1, collectionType );
  return this;
}

HIDDesc.prototype.EndCollection = function () {
  this.desc.push( 0xc0 );
  return this;
}