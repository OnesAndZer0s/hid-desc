import { HIDDesc } from "./HIDDesc";
import { UsagePages } from "./UsagePages";

declare module "./HIDDesc" {
  export interface HIDDesc<Page extends UsagePages> {
    UsagePage<Page extends UsagePages> ( page: Page ): HIDDesc<Page>;
  }
}

HIDDesc.prototype.UsagePage = function <Page extends UsagePages> ( page: Page ) {
  this.desc.push( 0x05, page.UsagePage() );
  return this as unknown as HIDDesc<Page>;
}