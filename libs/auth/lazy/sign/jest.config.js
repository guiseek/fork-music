module.exports = {
  name: 'auth-lazy-sign',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/auth/lazy/sign',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
