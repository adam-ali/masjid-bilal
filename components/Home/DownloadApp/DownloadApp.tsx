import { Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'

export default function DownloadApp() {
  return (
    <Box
      sx={{
        p: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'primary.light',
      }}
      my={3}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '1.75rem' },
          color: 'text.primary',
          my: 3,
        }}
      >
        View prayer times in App
      </Typography>
      <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mb:2, width: 220 }}>
        View prayer times easier through our app and widgets.
      </Typography>

      <Link href="https://apps.apple.com/gb/app/masjid-e-bilal/id6479962497" target="_blank" sx={{mb:2}}>
        <Image src="/download.svg" width={135} height={40} className="my-4" alt="Download on the App Store" />
      </Link>

      <Image
        src="/app_download.png"
        width={608}
        height={818}
        alt="Masjid e Bilal mobile App"
        className=" self-center w-80 h-80"
      />
    </Box>
  )
}
