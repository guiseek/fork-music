module.exports = {
  name: 'common-forms-team-form',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/forms/team-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
