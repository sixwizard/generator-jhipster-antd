const files = {
  common: [
    {
      templates: [
        {
          file: 'entity-list.tsx',
          renameTo: generator => `src/pages/${generator.context.entityFileName}/list.tsx`,
        },
        {
          file: 'entity-edit.tsx',
          renameTo: generator => `src/pages/${generator.context.entityFileName}/edit.tsx`,
        },
        {
          file: 'entity-column.tsx',
          renameTo: generator => `src/pages/${generator.context.entityFileName}/column.tsx`,
        },
        {
          file: 'entity-api.ts',
          renameTo: generator => `src/services/${generator.context.entityFileName}/api.ts`,
        }
      ],
    },
  ],
};

module.exports = { files, writeFiles };

function writeFiles() {
  this.writeFilesToDisk(files, this);
}
