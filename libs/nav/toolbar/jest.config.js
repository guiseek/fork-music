module.exports = {
  name: 'nav-toolbar',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/nav/toolbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
