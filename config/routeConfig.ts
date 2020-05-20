export default [
  {
    path: '/web',
    title: '组件库',
    routes: [
      {
        path: '/web/components',
        routes: [
          {
            path: '/web/components/example',
            component: './web/components/example',
            title: 'Example',
          },
        ],
      },
    ],
  },
  {
    path: '/charts',
    title: '图表组件库',
    routes: [
      {
        path: '/charts/components',
        routes: [
          {
            path: '/charts/components/chart-dom',
            component: './charts/components/chart-dom',
            title: 'ChartDom',
          },
          {
            path: '/charts/components/com-block',
            component: './charts/components/com-block',
            title: 'ComBlock',
          },
        ],
      },
      {
        path: '/charts/utils',
        routes: [
          {
            path: '/charts/utils/create-line-plot',
            component: './charts/utils/create-line-plot',
            title: 'createLinePlot',
          },
        ],
      },
    ],
  },
  {
    path: '/',
    routes: [
      { path: '/', redirect: '/homepage' },
      { path: '/homepage', component: './homepage' },
      { path: '*', component: './404' },
    ],
  },
];
