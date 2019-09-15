module.exports = {
  name: 'profile-settings-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/profile-settings-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
