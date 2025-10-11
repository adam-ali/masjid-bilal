import { Header } from '@/components/layouts/header'
import { Container } from '@chakra-ui/react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
  <>
    <Header />
    <Container>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </Container>
  </>
)

export const Route = createRootRoute({ component: RootLayout })
