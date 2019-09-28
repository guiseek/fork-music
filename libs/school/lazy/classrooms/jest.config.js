module.exports = {
  name: 'school-lazy-classrooms',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/school/lazy/classrooms',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
