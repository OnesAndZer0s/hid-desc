import { CollectionType } from "./CollectionType";
import { FieldDesc } from "./FieldDesc";
import { UsagePages } from "./UsagePages";
declare module "./HIDDesc" {
    interface HIDDesc<Page extends UsagePages> {
        /**
        A Collection item identifies a relationship between
        two or more data (Input, Output, or Feature.)
        */
        Collection(collectionType: CollectionType): HIDDesc<Page>;
        EndCollection(): HIDDesc<Page>;
        /**
          An Input item describes information about the data provided by one or more
        physical controls. An application can use this information to interpret the data
        provided by the device. All data fields defined in a single item share an
        identical data format
        */
        Input(desc: FieldDesc): HIDDesc<Page>;
        /**
          The Output item is used to define an output data field in a report. This item is
        similar to an Input item except it describes data sent to the device—for
        example, LED states.
        */
        Output(desc: FieldDesc): HIDDesc<Page>;
        /**
          Feature items describe device configuration information that can be sent to
        the device.
        */
        Feature(desc: FieldDesc): HIDDesc<Page>;
    }
}
