module.exports = {
  name: 'nav-edu-helper',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/nav/edu-helper',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
