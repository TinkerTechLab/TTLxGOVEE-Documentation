import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b19'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cac'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b55'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bff'),
            routes: [
              {
                path: '/docs/category/govee-api-keys',
                component: ComponentCreator('/docs/category/govee-api-keys', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/integrations',
                component: ComponentCreator('/docs/category/integrations', '3d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GOVEE-API-Keys/security-levels',
                component: ComponentCreator('/docs/GOVEE-API-Keys/security-levels', 'a64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/GOVEE-API-Keys/using-multiple-keys',
                component: ComponentCreator('/docs/GOVEE-API-Keys/using-multiple-keys', '1be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Integrations/discord',
                component: ComponentCreator('/docs/Integrations/discord', '43b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Integrations/ios',
                component: ComponentCreator('/docs/Integrations/ios', '39b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Integrations/webAPI',
                component: ComponentCreator('/docs/Integrations/webAPI', 'efc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Integrations/webhooks',
                component: ComponentCreator('/docs/Integrations/webhooks', 'a6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/support',
                component: ComponentCreator('/docs/support', 'eef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/upgrading',
                component: ComponentCreator('/docs/upgrading', '8be'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0aa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
