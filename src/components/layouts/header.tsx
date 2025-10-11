import React from 'react'
import {
  Box,
  Flex,
  Button,
  IconButton,
  useDisclosure,
  Drawer, // CHANGED: We only import the main Drawer component now
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/react'
import { Menu } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="header" bg="white" p={4} boxShadow="sm" mb={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="md" color="brand.green.600">
          <Link to="/">Mosque Name</Link>
        </Heading>

        {/* Desktop Navigation */}
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              as={Link}
              // @ts-ignore
              to={link.to}
              variant="ghost"
              colorScheme="brand.green"
              activeProps={{
                style: { fontWeight: 'bold', color: 'var(--chakra-colors-brand-green-500)' },
              }}
            >
              {link.label}
            </Button>
          ))}
        </HStack>

        {/* Mobile Navigation - Hamburger Icon */}
        <IconButton aria-label="Open menu" display={{ base: 'flex', md: 'none' }} onClick={onOpen} variant="outline">
          <Menu />
        </IconButton>
      </Flex>

      <Drawer.Root placement="right" onClose={onClose} isOpen={isOpen}>
        <Drawer.Backdrop />
        <Drawer.Trigger />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Title />
            </Drawer.Header>
            <Drawer.Body>
              <VStack as="nav" spacing={4} align="stretch">
                {navLinks.map((link) => (
                  <Button
                    key={link.to}
                    as={Link}
                    // @ts-ignore
                    to={link.to}
                    variant="ghost"
                    colorScheme="brand.green"
                    w="100%"
                    onClick={onClose}
                    activeProps={{
                      style: { fontWeight: 'bold', background: 'var(--chakra-colors-brand-green-50)' },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </VStack>
            </Drawer.Body>
            <Drawer.Footer />
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}
