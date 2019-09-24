module.exports = {
  name: 'workdesk-admin',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/workdesk/admin',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
