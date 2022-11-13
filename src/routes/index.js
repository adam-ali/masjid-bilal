import { useRoutes, Navigate } from 'react-router-dom'

import Error404 from '../pages/Errors/Error404'
import MainRoutes from './MainRoutes'

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
  return useRoutes([
    MainRoutes,
    { path: '/error-404', element: <Error404 /> },
    { path: '/*', element: <Navigate to="/error-404" /> }
  ])
}
