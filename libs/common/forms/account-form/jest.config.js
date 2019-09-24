module.exports = {
  name: 'common-forms-account-form',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/forms/account-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
