module.exports = {
  name: 'nav-navigator',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/nav/navigator',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
