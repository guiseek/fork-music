module.exports = {
  name: 'account-lazy-account',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/account/lazy/account',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
