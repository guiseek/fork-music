module.exports = {
  name: 'modules-billing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/modules/billing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
