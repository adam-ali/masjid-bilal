import { lazy } from 'react'

import MainLayout from '../layouts/MainLayout/MainLayout'

const Home = lazy(() => import('../pages/Home/Home'))

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    }
    // {
    //     path: '/dashboard/default',
    //     element: <DashboardDefault />
    // },
    // {
    //     path: '/utils/util-typography',
    //     element: <UtilsTypography />
    // }
  ]
}

export default MainRoutes
