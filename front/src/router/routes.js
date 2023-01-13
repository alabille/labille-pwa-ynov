const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') }
    ]
  },
  {
    path: '/list/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ListPage.vue') }
    ]
  },
  // {
  //   path: '/list/:id/tasks',
  //   children: [
  //     { path: 'create', component: () => import('pages/.vue') }
  //   ]
  // },
  // {
  //   path: '/list/:taskListId/tasks/:taskId',
  //   children: [
  //     { path: '', component: () => import('pages/.vue') },
  //     { path: 'edit', component: () => import('pages/.vue') }
  //   ]
  // },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
