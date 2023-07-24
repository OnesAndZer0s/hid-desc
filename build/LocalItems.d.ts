import { UsagePages } from "./UsagePages";
declare module "./HIDDesc" {
    interface HIDDesc<Page extends UsagePages> {
        /**
          Usage index for an item usage; represents a
        suggested usage for the item or collection. In the
        case where an item represents multiple controls, a
        Usage tag may suggest a usage for every variable
        or element in an array.
        */
        Usage<PageDesc extends Page[keyof Page] & number>(page: PageDesc): HIDDesc<Page>;
        /**
          Defines the starting usage associated with an array
        or bitmap.
        */
        UsageMinimum(min: number): HIDDesc<Page>;
        /**
          Defines the ending usage associated with an array
        or bitmap.
        */
        UsageMaximum(min: number): HIDDesc<Page>;
        /**
          Determines the body part used for a control. Index
        points to a designator in the Physical descriptor.
        */
        /**
          Defines the index of the starting designator
        associated with an array or bitmap.
        */
        /**
          Defines the index of the ending designator
        associated with an array or bitmap.
        */
        /**
          String index for a String descriptor; allows a string
        to be associated with a particular item or control.
        */
        /**
          Specifies the first string index when assigning a
        group of sequential strings to controls in an array
        or bitmap.
        */
        /**
          Specifies the last string index when assigning a
        group of sequential strings to controls in an array
        or bitmap.
        */
        /**
          Defines the beginning or end of a set of local items
        (true = open set, false = close set).
        */
        Delimiter(open: boolean): HIDDesc<Page>;
    }
}
