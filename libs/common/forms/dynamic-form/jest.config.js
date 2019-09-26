module.exports = {
  name: 'common-forms-dynamic-form',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/forms/dynamic-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
