module.exports = {
  name: 'account-shared-account',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/account/shared/account',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
