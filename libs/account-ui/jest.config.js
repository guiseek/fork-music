module.exports = {
  name: 'account-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/account-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
