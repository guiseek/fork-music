module.exports = {
  name: 'agent-workdesk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/agent-workdesk',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
