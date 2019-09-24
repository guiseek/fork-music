module.exports = {
  name: 'workdesk-teacher',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/workdesk/teacher',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
