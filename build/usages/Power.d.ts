export declare namespace Power {
    const UsagePage: () => number;
}
export declare enum Power {
    IName = 1,
    PresentStatus = 2,
    ChangedStatus = 3,
    UPS = 4,
    PowerSupply = 5,
    BatterySystem = 16,
    BatterySystemID = 17,
    Battery = 18,
    BatteryID = 19,
    Charger = 20,
    ChargerID = 21,
    PowerConverter = 22,
    PowerConverterID = 23,
    OutletSystem = 24,
    OutletSystemID = 25,
    Input = 26,
    InputID = 27,
    Output = 28,
    OutputID = 29,
    Flow = 30,
    FlowID = 31,
    Outlet = 32,
    OutletID = 33,
    Gang = 34,
    GangID = 35,
    PowerSummary = 36,
    PowerSummaryID = 37,
    Voltage = 48,
    Current = 49,
    Frequency = 50,
    ApparentPower = 51,
    ActivePower = 52,
    PercentLoad = 53,
    Temperature = 54,
    Humidity = 55,
    BadCount = 56,
    ConfigVoltage = 64,
    ConfigCurrent = 65,
    ConfigFrequency = 66,
    ConfigApparentPower = 67,
    ConfigActivePower = 68,
    ConfigPercentLoad = 69,
    ConfigTemperature = 70,
    ConfigHumidity = 71,
    SwitchOnControl = 80,
    SwitchOffControl = 81,
    ToggleControl = 82,
    LowVoltageTransfer = 83,
    HighVoltageTransfer = 84,
    DelayBeforeReboot = 85,
    DelayBeforeStartup = 86,
    DelayBeforeShutdown = 87,
    Test = 88,
    ModuleReset = 89,
    AudibleAlarmControl = 90,
    Present = 96,
    Good = 97,
    InternalFailure = 98,
    VoltageOutOfRange = 99,
    FrequencyOutOfRange = 100,
    Overload = 101,
    OverCharged = 102,
    OverTemperature = 103,
    ShutdownRequested = 104,
    ShutdownImminent = 105,
    SwitchOnOff = 107,
    Switchable = 108,
    Used = 109,
    Boost = 110,
    Buck = 111,
    Initialized = 112,
    Tested = 113,
    AwaitingPower = 114,
    CommunicationLost = 115,
    IManufacturer = 253,
    IProduct = 254,
    ISerialNumber = 255
}
