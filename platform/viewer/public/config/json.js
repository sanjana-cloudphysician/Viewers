window.config = {
  routerBasename: '/',
  // whiteLabelling: {},
  extensions: [],
  modes: [],
  showStudyList: true,
  // below flag is for performance reasons, but it might not work for all servers
  // omitQuotationForMultipartRequest: true,
  // showWarningMessageForCrossOrigin: true,
  // showCPUFallbackMessage: true,
  // showLoadingIndicator: true,
  dataSources: [
    {
      provider: 'json',
      url: '/home/cloud/Viewers/platform/viewer/public/LIDC-IDRI-0001/LIDC-IDRI-0001.json'
      // name: "My JSON Data Source",
      // type: "dicomweb",
      // wadoUriRoot: "http://localhost:3000/dicom-web",
      // qidoRoot: "http://localhost:3000/dicom-web",
      // wadoRoot: "http://localhost:3000/dicom-web",
      // method: 'GET',
      // qidoSupport: true,
      // wadoSupport: true,
      // supportsFuzzyMatching: true,
      // imageRendering: "wadors",
      // thumbnailRendering: "wadors",
      // dataSource: {
      //   type: "json",
      //   url: "/home/cloud/Viewers/platform/viewer/public/LIDC-IDRI-0001/LIDC-IDRI-0001.json"
      // },
      // requestOptions: {
      //   headers: {
      //     Accept: 'application/json',
      //   },
      }
  ],
  defaultDataSource: "My JSON Data Source",
  hotkeys: [
    {
      commandName: 'incrementActiveViewport',
      label: 'Next Viewport',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Previous Viewport',
      keys: ['left'],
    },
    { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
    { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
    { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Flip Horizontally',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportVertical',
      label: 'Flip Vertically',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
    { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
    { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
    { commandName: 'nextImage', label: 'Next Image', keys: ['down'] },
    { commandName: 'previousImage', label: 'Previous Image', keys: ['up'] },
    // {
    //   commandName: 'previousViewportDisplaySet',
    //   label: 'Previous Series',
    //   keys: ['pagedown'],
    // },
    // {
    //   commandName: 'nextViewportDisplaySet',
    //   label: 'Next Series',
    //   keys: ['pageup'],
    // },
    { commandName: 'setZoomTool', label: 'Zoom', keys: ['z'] },
    // ~ Window level presets
    {
      commandName: 'windowLevelPreset1',
      label: 'W/L Preset 1',
      keys: ['1'],
    },
    {
      commandName: 'windowLevelPreset2',
      label: 'W/L Preset 2',
      keys: ['2'],
    },
    {
      commandName: 'windowLevelPreset3',
      label: 'W/L Preset 3',
      keys: ['3'],
    },
    {
      commandName: 'windowLevelPreset4',
      label: 'W/L Preset 4',
      keys: ['4'],
    },
    {
      commandName: 'windowLevelPreset5',
      label: 'W/L Preset 5',
      keys: ['5'],
    },
    {
      commandName: 'windowLevelPreset6',
      label: 'W/L Preset 6',
      keys: ['6'],
    },
    {
      commandName: 'windowLevelPreset7',
      label: 'W/L Preset 7',
      keys: ['7'],
    },
    {
      commandName: 'windowLevelPreset8',
      label: 'W/L Preset 8',
      keys: ['8'],
    },
    {
      commandName: 'windowLevelPreset9',
      label: 'W/L Preset 9',
      keys: ['9'],
    },
  ],
};
