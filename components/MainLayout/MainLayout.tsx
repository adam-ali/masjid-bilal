import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import DrawerAppBar from './AppBar/AppBar'

// ==============================|| MINIMAL LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <>
      <DrawerAppBar />
      <Container maxWidth="md" sx={{ px: '0' }} className="page-container">
        <div className="content-wrapper">
          <Outlet />
        </div>
        <Footer />
      </Container>
    </>
  )
}

export default MainLayout
