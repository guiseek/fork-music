module.exports = {
  name: 'reporting-ui-stat-dashboard-ui',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/reporting/ui/stat-dashboard-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
