module.exports = {
  name: 'common-forms-form-backend',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/forms/form-backend',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
