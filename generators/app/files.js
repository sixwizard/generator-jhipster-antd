const files = {
  common: [
    {
      templates: [

      ],
    },
  ],
  userManagement: [
    {
      condition: generator => !generator.context.skipUserManagement,
      templates: [
        'app/modules/account/password-reset/forgot-password-screen.js',
      ],
    },
  ]
};

module.exports = { files, writeFiles };

function writeFiles() {
  this.writeFilesToDisk(files, this);
}
