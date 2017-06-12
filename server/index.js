require('ignore-styles');
require('babel-register')({
  presets: [
    'env',
    'react'
  ],
  plugins: [
    'transform-class-properties',
    'dynamic-import-node'
    // 'transform-ensure-ignore'
  ]
});

require('./boot');