module.exports = {
  name: 'cdk-dialog',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cdk/dialog',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
