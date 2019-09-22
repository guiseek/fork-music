module.exports = {
  name: 'auth-shared-auth',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/auth/shared/auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
