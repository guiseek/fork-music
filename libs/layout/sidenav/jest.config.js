module.exports = {
  name: 'layout-sidenav',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/sidenav',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
