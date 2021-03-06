module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'buttons',
  url: 'dist/tests/buttons.html',
  disabled: false
}, {
  label: 'buttons-groups-nesting',
  url: 'dist/tests/buttons.html',
  onReadyScript: 'chromy/buttons.js',
  selectors: ['#button-groups-nesting'],
  misMatchThreshold: 3.0
}, {
  label: 'buttons-groups-vertical-variation',
  url: 'dist/tests/buttons.html',
  selectors: ['#button-groups-vertical-variation'],
  clickSelector: '#btnGroupVerticalDrop1',
  misMatchThreshold: 3.0
}, {
  label: 'buttons-dropdowns-single-button',
  url: 'dist/tests/buttons.html',
  onReadyScript: 'chromy/buttons.js',
  selectors: ['#button-dropdowns-single-button'],
  misMatchThreshold: 3.0
}, {
  label: 'buttons-dropdowns-split-button',
  url: 'dist/tests/buttons.html',
  onReadyScript: 'chromy/buttons.js',
  selectors: ['#button-dropdowns-split-button'],
  misMatchThreshold: 3.0
}, {
  label: 'buttons-dropdowns-sizing',
  url: 'dist/tests/buttons.html',
  onReadyScript: 'chromy/buttons.js',
  selectors: ['#button-dropdowns-sizing'],
  misMatchThreshold: 3.0
}, {
  label: 'buttons-dropdowns-dropup-variation',
  url: 'dist/tests/buttons.html',
  onReadyScript: 'chromy/buttons.js',
  selectors: ['#button-dropdowns-dropup-variation'],
  misMatchThreshold: 3.0
}]
