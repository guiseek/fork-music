module.exports = {
  name: 'common-forms-address-form',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/forms/address-form',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
