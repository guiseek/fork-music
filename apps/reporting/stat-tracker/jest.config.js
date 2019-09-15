module.exports = {
  name: 'reporting-stat-tracker',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/reporting/stat-tracker',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
