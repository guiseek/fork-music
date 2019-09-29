module.exports = {
  name: 'common-cards',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/cards',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
