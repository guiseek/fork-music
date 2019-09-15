module.exports = {
  name: 'ticket-list-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ticket-list-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
