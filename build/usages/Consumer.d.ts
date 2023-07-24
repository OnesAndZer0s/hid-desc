export declare namespace Consumer {
    const UsagePage: () => number;
}
export declare enum Consumer {
    ConsumerControl = 1,
    NumericKeyPad = 2,
    ProgrammableButtons = 3,
    Microphone = 4,
    Headphone = 5,
    GraphicEqualizer = 6,
    Plus10 = 32,
    Plus100 = 33,
    AMPM = 34,
    Power = 48,
    Reset = 49,
    Sleep = 50,
    SleepAfter = 51,
    SleepMode = 52,
    Illumination = 53,
    FunctionButtons = 54,
    Menu = 64,
    MenuPick = 65,
    MenuUp = 66,
    MenuDown = 67,
    MenuLeft = 68,
    MenuRight = 69,
    MenuEscape = 70,
    MenuValueIncrease = 71,
    MenuValueDecrease = 72,
    DataOnScreen = 96,
    ClosedCaption = 97,
    ClosedCaptionSelect = 98,
    VCRTV = 99,
    BroadcastMode = 100,
    Snapshot = 101,
    Still = 102,
    PictureInPictureToggle = 103,
    PictureInPictureSwap = 104,
    RedMenuButton = 105,
    GreenMenuButton = 106,
    BlueMenuButton = 107,
    YellowMenuButton = 108,
    Aspect = 109,
    ThreeDModeSelect = 110,
    DisplayBrightnessIncrement = 111,
    DisplayBrightnessDecrement = 112,
    DisplayBrightness = 113,
    DisplayBacklightToggle = 114,
    DisplayBrightnessMinimum = 115,
    DisplayBrightnessMaximum = 116,
    DisplayBrightnessSetAutoBrightness = 117,
    CameraAccessEnable = 118,
    CameraAccessDisable = 119,
    CameraAccessToggle = 120,
    KeyboardBacklightIncrement = 121,
    KeyboardBacklightDecrement = 122,
    KeyboardBacklightSetLevel = 123,
    KeyboardBacklight = 124,
    KeyboardBacklightSetMinimum = 125,
    KeyboardBacklightSetMaximum = 126,
    KeyboardBacklightAuto = 127,
    Selection = 128,
    AssignSelection = 129,
    ModeStep = 130,
    RecallLast = 131,
    EnterChannel = 132,
    OrderMovie = 133,
    Channel = 134,
    MediaSelection = 135,
    MediaSelectComputer = 136,
    MediaSelectTV = 137,
    MediaSelectWWW = 138,
    MediaSelectDVD = 139,
    MediaSelectTelephone = 140,
    MediaSelectProgramGuide = 141,
    MediaSelectVideoPhone = 142,
    MediaSelectGames = 143,
    MediaSelectMessages = 144,
    MediaSelectCD = 145,
    MediaSelectVCR = 146,
    MediaSelectTuner = 147,
    Quit = 148,
    Help = 149,
    MediaSelectTape = 150,
    MediaSelectCable = 151,
    MediaSelectSatellite = 152,
    MediaSelectSecurity = 153,
    MediaSelectHome = 154,
    MediaSelectCall = 155,
    ChannelIncrement = 156,
    ChannelDecrement = 157,
    MediaSelectSAP = 158,
    VCRPlus = 160,
    Once = 161,
    Daily = 162,
    Weekly = 163,
    Monthly = 164,
    Play = 176,
    Pause = 177,
    Record = 178,
    FastForward = 179,
    Rewind = 180,
    ScanNextTrack = 181,
    ScanPreviousTrack = 182,
    Stop = 183,
    Eject = 184,
    RandomPlay = 185,
    SelectDisk = 186,
    EnterDisk = 187,
    Repeat = 188,
    Tracking = 189,
    TrackNormal = 190,
    SlowTracking = 191,
    FrameForward = 192,
    FrameBack = 193,
    Mark = 194,
    ClearMark = 195,
    RepeatFromMark = 196,
    ReturnToMark = 197,
    SearchMarkForward = 198,
    SearchMarkBackwards = 199,
    CounterReset = 200,
    ShowCounter = 201,
    TrackingIncrement = 202,
    TrackingDecrement = 203,
    StopOrEject = 204,
    PlayPause = 205,
    PlaySkip = 206,
    VoiceCommand = 207,
    InvokeCaptureInterface = 208,
    StartStopGameRecording = 209,
    HistoricalGameCapture = 210,
    CaptureGameScreenshot = 211,
    ShowHideRecordingIndicator = 212,
    StartStopMicrophoneCapture = 213,
    StartStopCameraCapture = 214,
    StartStopGameBroadcast = 215,
    StartStopVoiceDictation = 216,
    InvokeDismissEmojiPicker = 217,
    Volume = 224,
    Balance = 225,
    Mute = 226,
    Bass = 227,
    Treble = 228,
    BassBoost = 229,
    SurroundMode = 230,
    Loudness = 231,
    MPX = 232,
    VolumeIncrement = 233,
    VolumeDecrement = 234,
    SpeedSelect = 240,
    PlaybackSpeed = 241,
    StandardPlay = 242,
    LongPlay = 243,
    ExtendedPlay = 244,
    Slow = 245,
    FanEnable = 256,
    FanSpeed = 257,
    LightEnable = 258,
    LightIlluminationLevel = 259,
    ClimateControlEnable = 260,
    RoomTemperature = 261,
    SecurityEnable = 262,
    FireAlarm = 263,
    PoliceAlarm = 264,
    Proximity = 265,
    Motion = 266,
    DuressAlarm = 267,
    HoldupAlarm = 268,
    MedicalAlarm = 269,
    BalanceRight = 336,
    BalanceLeft = 337,
    BassIncrement = 338,
    BassDecrement = 339,
    TrebleIncrement = 340,
    TrebleDecrement = 341,
    SpeakerSystem = 352,
    ChannelLeft = 353,
    ChannelRight = 354,
    ChannelCenter = 355,
    ChannelFront = 356,
    ChannelCenterFront = 357,
    ChannelSide = 358,
    ChannelSurround = 359,
    ChannelLowFrequencyEnhancement = 360,
    ChannelTop = 361,
    ChannelUnknown = 362,
    SubChannel = 368,
    SubChannelIncrement = 369,
    SubChannelDecrement = 370,
    AlternateAudioIncrement = 371,
    AlternateAudioDecrement = 372,
    ApplicationLaunchButtons = 384,
    ALLaunchButtonConfigTool = 385,
    ALProgrammableButton = 386,
    ALConsumerControlConfig = 387,
    ALWordProcessor = 388,
    ALTextEditor = 389,
    ALSpreadsheet = 390,
    ALGraphicsEditor = 391,
    ALPresentationApp = 392,
    ALDatabaseApp = 393,
    ALEmailReader = 394,
    ALNewsreader = 395,
    ALVoicemail = 396,
    ALContactsAddressBook = 397,
    ALCalendarSchedule = 398,
    ALTaskProjectManager = 399,
    ALLogJournalTimecard = 400,
    ALCheckbookFinance = 401,
    ALCalculator = 402,
    ALAVCapturePlayback = 403,
    ALLocalMachineBrowser = 404,
    ALLANWANBrowser = 405,
    ALInternetBrowser = 406,
    ALRemoteNetworkingISDN = 407,
    ALNetworkConference = 408,
    ALNetworkChat = 409,
    ALTelephonyDialer = 410,
    ALLogon = 411,
    ALLogoff = 412,
    ALLogonLogoff = 413,
    ALTerminalLockScreensaver = 414,
    ALControlPanel = 415,
    ALCommandLineProcessorRun = 416,
    ALProcessTaskManager = 417,
    ALSelectTaskApplication = 418,
    ALNextTaskApplication = 419,
    ALPreviousTaskApplication = 420,
    ALPreemptiveHaltTaskApplication = 421,
    ALIntegratedHelpCenter = 422,
    ALDocuments = 423,
    ALThesaurus = 424,
    ALDictionary = 425,
    ALDesktop = 426,
    ALSpellCheck = 427,
    ALGrammarCheck = 428,
    ALWirelessStatus = 429,
    ALKeyboardLayout = 430,
    ALVirusProtection = 431,
    ALEncryption = 432,
    ALScreenSaver = 433,
    ALAlarms = 434,
    ALClock = 435,
    ALFileBrowser = 436,
    ALPowerStatus = 437,
    ALImageBrowser = 438,
    ALAudioBrowser = 439,
    ALMovieBrowser = 440,
    ALDigitalRightsManager = 441,
    ALDigitalWallet = 442,
    ALInstantMessaging = 444,
    ALOEMFeaturesBrowser = 445,
    ALOEMHelp = 446,
    ALOnlineCommunity = 447,
    ALEntertainmentContentBrowser = 448,
    ALOnlineShoppingBrowser = 449,
    ALSmartCardInformationHelp = 450,
    ALMarketMonitorFinanceBrowser = 451,
    ALCustomizedCorporateNewsBrowser = 452,
    ALOnlineActivityBrowser = 453,
    ALResearchSearchBrowser = 454,
    ALAudioPlayer = 455,
    ALMessageStatus = 456,
    ALContactSync = 457,
    ALNavigation = 458,
    ALContextAwareDesktopAssistant = 459,
    GenericGUIApplicationControls = 512,
    ACNew = 513,
    ACOpen = 514,
    ACClose = 515,
    ACExit = 516,
    ACMaximize = 517,
    ACMinimize = 518,
    ACSave = 519,
    ACPrint = 520,
    ACProperties = 521,
    ACUndo = 538,
    ACCopy = 539,
    ACCut = 540,
    ACPaste = 541,
    ACSelectAll = 542,
    ACFind = 543,
    ACFindAndReplace = 544,
    ACSearch = 545,
    ACGoTo = 546,
    ACHome = 547,
    ACBack = 548,
    ACForward = 549,
    ACStop = 550,
    ACRefresh = 551,
    ACPreviousLink = 552,
    ACNextLink = 553,
    ACBookmarks = 554,
    ACHistory = 555,
    ACSubscriptions = 556,
    ACZoomIn = 557,
    ACZoomOut = 558,
    ACZoom = 559,
    ACFullScreenView = 560,
    ACNormalView = 561,
    ACViewToggle = 562,
    ACScrollUp = 563,
    ACScrollDown = 564,
    ACScroll = 565,
    ACPanLeft = 566,
    ACPanRight = 567,
    ACPan = 568,
    ACNewWindow = 569,
    ACTileHorizontally = 570,
    ACTileVertically = 571,
    ACFormat = 572,
    ACEdit = 573,
    ACBold = 574,
    ACItalics = 575,
    ACUnderline = 576,
    ACStrikethrough = 577,
    ACSubscript = 578,
    ACSuperscript = 579,
    ACAllCaps = 580,
    ACRotate = 581,
    ACResize = 582,
    ACFlipHorizontal = 583,
    ACFlipVertical = 584,
    ACMirrorHorizontal = 585,
    ACMirrorVertical = 586,
    ACFontSelect = 587,
    ACFontColor = 588,
    ACFontSize = 589,
    ACJustifyLeft = 590,
    ACJustifyCenterH = 591,
    ACJustifyRight = 592,
    ACJustifyBlockH = 593,
    ACJustifyTop = 594,
    ACJustifyCenterV = 595,
    ACJustifyBottom = 596,
    ACJustifyBlockV = 597,
    ACIndentDecrease = 598,
    ACIndentIncrease = 599,
    ACNumberedList = 600,
    ACRestartNumbering = 601,
    ACBulletedList = 602,
    ACPromote = 603,
    ACDemote = 604,
    ACYes = 605,
    ACNo = 606,
    ACCancel = 607,
    ACCatalog = 608,
    ACBuyCheckout = 609,
    ACAddToCart = 610,
    ACExpand = 611,
    ACExpandAll = 612,
    ACCollapse = 613,
    ACCollapseAll = 614,
    ACPrintPreview = 615,
    ACPasteSpecial = 616,
    ACInsertMode = 617,
    ACDelete = 618,
    ACLock = 619,
    ACUnlock = 620,
    ACProtect = 621,
    ACUnprotect = 622,
    ACAttachComment = 623,
    ACDeleteComment = 624,
    ACViewComment = 625,
    ACSelectWord = 626,
    ACSelectSentence = 627,
    ACSelectParagraph = 628,
    ACSelectColumn = 629,
    ACSelectRow = 630,
    ACSelectTable = 631,
    ACSelectObject = 632,
    ACRedoRepeat = 633,
    ACSort = 634,
    ACSortAscending = 635,
    ACSortDescending = 636,
    ACFilter = 637,
    ACSetClock = 638,
    ACViewClock = 639,
    ACSelectTimeZone = 640,
    ACEditTimeZone = 641,
    ACSetAlarm = 642,
    ACClearAlarm = 643,
    ACSnoozeAlarm = 644,
    ACResetAlarm = 645,
    ACSynchronize = 646,
    ACSendReceive = 647,
    ACSendTo = 648,
    ACReply = 649,
    ACReplyAll = 650,
    ACForwardMessage = 651,
    ACSend = 652,
    ACAttachFile = 653,
    ACUpload = 654,
    ACDownloadSaveTargetAs = 655,
    ACSetBorders = 656,
    ACInsertRow = 657,
    ACInsertColumn = 658,
    ACInsertFile = 659,
    ACInsertPicture = 660,
    ACInsertObject = 661,
    ACInsertSymbol = 662,
    ACSaveAndClose = 663,
    ACRename = 664,
    ACMerge = 665,
    ACSplit = 666,
    ACDisributeHorizontally = 667,
    ACDisributeVertically = 668,
    ACNextKeyboardLayoutSelect = 669,
    ACNavigationGuidance = 670,
    ACDesktopShowAllWindows = 671,
    ACSoftKeyLeft = 672,
    ACSoftKeyRight = 673,
    ACDesktopShowAllApplications = 674,
    ACIdleKeepAlive = 688,
    ExtendedKeyboardAttributes = 704,
    KeyboardFormFactor = 705,
    KeyboardKeyType = 706,
    KeyboardPhysicalLayout = 707,
    VendorSpecificKeyboardPhysicalLayout = 708,
    KeyboardIETFLanguageTagIndex = 709,
    ImplementedKeyboardInputAssistControls = 710,
    KeyboardInputAssistPrevious = 711,
    KeyboardInputAssistNext = 712,
    KeyboardInputAssistPreviousGroup = 713,
    KeyboardInputAssistNextGroup = 714,
    KeyboardInputAssistAccept = 715,
    KeyboardInputAssistCancel = 716,
    PrivacyScreenToggle = 720,
    PrivacyScreenLevelDecrement = 721,
    PrivacyScreenLevelIncrement = 722,
    PrivacyScreenLevelMinimum = 723,
    PrivacyScreenLevelMaximum = 724,
    ContactEdited = 1280,
    ContactAdded = 1281,
    ContactRecordActive = 1282,
    ContactIndex = 1283,
    ContactNickname = 1284,
    ContactFirstName = 1285,
    ContactLastName = 1286,
    ContactFullName = 1287,
    ContactPhoneNumberPersonal = 1288,
    ContactPhoneNumberBuisness = 1289,
    ContactPhoneNumberMobile = 1290,
    ContactPhoneNumberPager = 1291,
    ContactPhoneNumberFax = 1292,
    ContactPhoneNumberOther = 1293,
    ContactEmailPersonal = 1294,
    ContactEmailBuisness = 1295,
    ContactEmailOther = 1296,
    ContactEmailMain = 1297,
    ContactSpeedDialNumber = 1298,
    ContactStatusFlag = 1299,
    ContactMisc = 1300
}
