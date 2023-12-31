export declare namespace EyeAndHeadTracker {
    const UsagePage: () => number;
}
export declare enum EyeAndHeadTracker {
    EyeTracker = 1,
    HeadTracker = 2,
    TrackingData = 16,
    Capabilities = 17,
    Configuration = 18,
    Status = 19,
    Control = 20,
    SensorTimestamp = 32,
    PositionX = 33,
    PositionY = 34,
    PositionZ = 35,
    GazePoint = 36,
    LeftEyePosition = 37,
    RightEyePosition = 38,
    HeadPosition = 39,
    HeadDirectionPoint = 40,
    RotationAboutXAxis = 41,
    RotationAboutYAxis = 42,
    RotationAboutZAxis = 43,
    TrackerQuality = 256,
    MinimumTrackingDistance = 257,
    OptimumTrackingDistance = 258,
    MaximumTrackingDistance = 259,
    MaximumScreenPlaneWidth = 260,
    MaximumScreenPlaneHeight = 261,
    DisplayManufacturerID = 512,
    DisplayProductID = 513,
    DisplaySerialNumber = 514,
    DisplayManufacturerDate = 515,
    CalibratedScreenWidth = 516,
    CalibratedScreenHeight = 517,
    SamplingFrequency = 768,
    ConfigurationStatus = 769,
    DeviceModeRequest = 1024
}
