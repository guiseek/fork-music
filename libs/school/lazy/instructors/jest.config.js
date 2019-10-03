module.exports = {
  name: 'school-lazy-instructors',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/school/lazy/instructors',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
