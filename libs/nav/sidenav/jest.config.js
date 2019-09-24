module.exports = {
  name: 'nav-sidenav',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/nav/sidenav',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
