import { UsagePages } from "./UsagePages";


/**
 * Class that handles all of the HID Descriptors
 */
export class HIDDesc<Page extends UsagePages> {

  /**
   * The descriptor array
   * @type {number[]}
   * @memberof HIDDesc
   * @instance
   */
  desc: number[] = [];
}