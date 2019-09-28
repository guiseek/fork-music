module.exports = {
  name: 'quick-start-admin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/quick-start/admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
