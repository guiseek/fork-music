module.exports = {
  name: 'auth-lazy-manager',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/auth/lazy/manager',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
