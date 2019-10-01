module.exports = {
  name: 'account-lazy-auth',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/account/lazy/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
