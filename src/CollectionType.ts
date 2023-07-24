export enum CollectionType {

  /**
    A physical collection is used for a set of data items that represent
  data points collected at one geometric point. This is useful for
  sensing devices which may need to associate sets of measured or
  sensed data with a single point. It does not indicate that a set of
  data values comes from one device, such as a keyboard. In the
  case of device which reports the position of multiple sensors,
  physical collections are used to show which data comes from
  each separate sensor.
  */
  Physical = 0x00,

  /**
    A group of Main items that might be familiar to applications. It
  could also be used to identify item groups serving different
  purposes in a single device. Common examples are a keyboard or
  mouse. A keyboard with an integrated pointing device could be
  defined as two different application collections. Data reports are
  usually (but not necessarily) associated with application
  collections (at least one report ID per application).
  */
  Application = 0x01,

  /**
    A logical collection is used when a set of data items form a
  composite data structure. An example of this is the association
  between a data buffer and a byte count of the data. The
  collection establishes the link between the count and the buffer
  */
  Logical = 0x02,

  /**
    Defines a logical collection that wraps all the fields in a report. A
  unique report ID will be contained in this collection. An
  application can easily determine whether a device supports a
  certain function. Note that any valid Report ID value can be
  declared for a Report collection.
  */
  Report = 0x03,

  /**
    A named array is a logical collection contains an array of selector
  usages. For a given function the set of selectors used by similar
  devices may vary. The naming of fields is common practice when
  documenting hardware registers. To determine whether a device
  supports a particular function like Status, an application might
  have to query for several known Status selector usages before it
  could determine whether the device supported Status. The Named
  Array usages allows the Array field that contains the selectors to
  be named, thus the application only needs to query for the Status
  usage to determine that a device supports status information.
  */
  NamedArray = 0x04,

  /**
    A Usage Switch is a logical collection that modifies the meaning
  of the usages that it contains. This collection type indicates to an
  application that the usages found in this collection must be
  special cased. For instance, rather than declaring a usage on the
  LED page for every possible function, an Indicator usage can be
  applied to a Usage Switch collection and the standard usages
  defined in that collection can now be identified as indicators for a
  function rather than the function itself. Note that this collection
  type is not used for the labeling Ordinal collections, a Logical
  collection type is used for that.
  */
  UsageSwitch = 0x05,


  /**
    Modifies the meaning of the usage attached to the encompassing
  collection. A usage typically defines a single operating mode for
  a control. The usage modifier allows the operating mode of a
  control to be extended. For instance, an LED is typically on or
  off. For particular states a device may want a generic method of
  blinking or choosing the color of a standard LED. Attaching the
  LED usage to a Usage Modifier collection will indicate to an
  application that the usage supports a new operating mode.
  */

  UsageModifier = 0x06,
};