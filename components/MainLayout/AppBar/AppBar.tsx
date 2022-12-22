import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MosqueIcon from '@mui/icons-material/Mosque'
import { Container, Grid } from '@mui/material'
import { useRouter } from 'next/router'
// import second from '../../../public/'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const drawerWidth = 240
const navItems = [
  { name: 'Home', route: '/' },
  { name: 'About', route: 'about' },
  { name: 'Contact', route: 'contact' }
]

export default function DrawerAppBar(props: Props) {
  const { window } = props
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Masjid Bilal
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => router.push(item.route)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static">
        <Container maxWidth="md" sx={{ px: '0' }}>
          <Toolbar>
            <Grid style={{ display: 'flex' }} sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h6" component="span" sx={{ mr: 1, fontWeight: 'bold' }}>
                Masjid Bilal
                {/* <Image src={MasjideBilal} layout="responsive" alt="Masjid Bilal" /> */}
              </Typography>
              <MosqueIcon />
            </Grid>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.name} sx={{ color: '#fff' }} onClick={() => router.push(item.route)}>
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
