module.exports = {
  name: 'common-tables-table-backend',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/tables/table-backend',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
