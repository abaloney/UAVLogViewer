import '../mavextra/mavextra'

export var store = {
    // currentTrajectory: [],
    trajectorySource: '',
    trajectories: {},
    timeTrajectory: {},
    timeAttitude: {},
    timeAttitudeQ: {},
    logType: '',
    showParams: false,
    showRadio: false,
    showMessages: false,
    flightModeChanges: [],
    file: null,
    events: [],
    cssColors: [],
    colors: [],
    mapAvailable: false,
    mission: [],
    showMap: false,
    currentTime: false,
    processDone: false,
    plotOn: false,
    processStatus: 'Pre-processing...',
    processPercentage: -1,
    mapLoading: false,
    plotLoading: false,
    timeRange: null,
    textMessages: [],
    metadata: null,
    // cesium menu:
    modelScale: 1.0,
    showClickableTrajectory: false,
    showTrajectory: true,
    showWaypoints: true,
    cameraType: 'follow',
    expressions: [], // holds message name
    expressionErrors: [],
    allAxis: [0, 1, 2, 3, 4, 5],
    allColors: [
        '#1f77b4',
        '#ff7f0e',
        '#2ca02c',
        '#d62728',
        '#9467BD',
        '#8C564B'],
    /* global _COMMIT_ */
    commit: _COMMIT_.slice(0, 6),
    /* global _BUILDDATE_ */
    buildDate: _BUILDDATE_
}
