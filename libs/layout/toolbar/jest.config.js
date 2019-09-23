module.exports = {
  name: 'layout-toolbar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/toolbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
