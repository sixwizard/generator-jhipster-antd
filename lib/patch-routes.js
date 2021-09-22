function patchRoutesForEntity(name) {
  const entityRoutesPath = 'config/routes.ts';

  // add route
  const route = `
  {
    path: '/${this.context.entityFileName}',
    name: '${this.context.entityFileName}',
    icon: 'table',
    routes: [
      {
        name: 'list',
        path: '/${this.context.entityFileName}',
        component: './${this.context.entityFileName}/list',
      },
      {
        name: 'edit',
        hideInMenu: true,
        path: '/${this.context.entityFileName}/edit/:id',
        component: './${this.context.entityFileName}/edit',
      },
      {
        name: 'add',
        hideInMenu: true,
        path: '/${this.context.entityFileName}/add/',
        component: './${this.context.entityFileName}/edit',
      }
    ],
  },
  `;
  this.patchInFile(entityRoutesPath, {
    before: 'jhipster-antd-pro-routes',
    insert: route,
    ignoreIfContains: `{ name: '${this.context.entityFileName}'`,
  });
}

module.exports = {
  patchRoutesForEntity,
};
