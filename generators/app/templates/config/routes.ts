export default [
  {
    path: "/user",
    layout: false,
    routes: [
      {
        path: "/user",
        routes: [
          {
            name: "login",
            path: "/user/login",
            component: "./user/Login",
          },
        ],
      },
    ],
  },
  {
    path: "/account",
    icon: "crown",
    hideInMenu: true,
    name: "account",
    routes: [
      {
        name: "setting",
        path: "/account/settings",
        component: "./account/Setting",
      },
      {
        name: "password",
        path: "/account/password",
        component: "./account/Password",
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    icon: "table",
    access: "canAdmin",
    routes: [
      {
        name: "user-management",
        path: "/admin/user-management",
        component: "./admin/user/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/admin/user-management/edit/:id",
        component: "./admin/user/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/admin/user-management/add/",
        component: "./admin/user/edit",
      },
    ],
  },
  {
    path: "/welcome",
    name: "welcome",
    icon: "smile",
    component: "./Welcome",
  },
  {
    name: "list.table-list",
    icon: "table",
    path: "/list",
    component: "./TableList",
  },
  {
    path: "/region",
    name: "region",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/region",
        component: "./region/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/region/edit/:id",
        component: "./region/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/region/add/",
        component: "./region/edit",
      },
    ],
  },

  {
    path: "/country",
    name: "country",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/country",
        component: "./country/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/country/edit/:id",
        component: "./country/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/country/add/",
        component: "./country/edit",
      },
    ],
  },

  {
    path: "/location",
    name: "location",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/location",
        component: "./location/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/location/edit/:id",
        component: "./location/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/location/add/",
        component: "./location/edit",
      },
    ],
  },

  {
    path: "/department",
    name: "department",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/department",
        component: "./department/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/department/edit/:id",
        component: "./department/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/department/add/",
        component: "./department/edit",
      },
    ],
  },

  {
    path: "/task",
    name: "task",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/task",
        component: "./task/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/task/edit/:id",
        component: "./task/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/task/add/",
        component: "./task/edit",
      },
    ],
  },

  {
    path: "/employee",
    name: "employee",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/employee",
        component: "./employee/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/employee/edit/:id",
        component: "./employee/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/employee/add/",
        component: "./employee/edit",
      },
    ],
  },

  {
    path: "/job",
    name: "job",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/job",
        component: "./job/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/job/edit/:id",
        component: "./job/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/job/add/",
        component: "./job/edit",
      },
    ],
  },

  {
    path: "/job-history",
    name: "job-history",
    icon: "table",
    routes: [
      {
        name: "list",
        path: "/job-history",
        component: "./job-history/list",
      },
      {
        name: "edit",
        hideInMenu: true,
        path: "/job-history/edit/:id",
        component: "./job-history/edit",
      },
      {
        name: "add",
        hideInMenu: true,
        path: "/job-history/add/",
        component: "./job-history/edit",
      },
    ],
  },

  // jhipster-antd-pro-routes

  {
    path: "/",
    redirect: "/welcome",
  },
  {
    component: "./404",
  },
];
