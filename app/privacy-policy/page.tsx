'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'

export default function privacyPolicy() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2} sx={{ p: '16px' }}>
      <Typography variant="h2">Privacy Policy for Masjid E Bilal</Typography>
      <Typography variant="body1">Effective Date: 31/03/2024</Typography>
      <Typography variant="body2">
        At Masjid E Bilal, one of our main priorities is the privacy of our users. This Privacy Policy document outlines
        the types of information that are not collected, processed, or stored and how we reinforce our commitment to
        your privacy. No Data Collection
      </Typography>
      <Typography variant="body2">
        Masjid E Bilal is designed with your privacy in mind. In alignment with our commitment to safeguard your
        personal and sensitive information, we hereby confirm that:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            We Do Not Collect Personal Information: We do not require, collect, or access any personal information from
            its users. You can use Masjid E Bilal without providing any personal details.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            We Do Not Require Sign-In: Users can access all features without the need to create an account or log in,
            ensuring complete anonymity and privacy.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            No Third-Party Data Sharing: Since we do not collect any personal data, there is no data to share or sell to
            third parties.
          </Typography>
        </li>
      </ul>
      <Typography variant="h4">Permissions and Data Usage</Typography>
      <div>
        <Typography variant="body2">
          Masjid E Bilal may request certain permissions from your device to enable specific features:
        </Typography>
        <Typography variant="body2">
          * Location Services: We may request access to your device's location to provide more personalised experiences.
          This data is processed locally on your device and is not stored, collected, or shared.
        </Typography>
      </div>
      <Typography variant="body2">
        Please note that granting these permissions is entirely optional and is not required for the basic functionality
        of Masjid E Bilal.
      </Typography>
      <Typography variant="h4">Changes to This Privacy Policy</Typography>
      <Typography variant="body2">
        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any
        changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are
        effective immediately after they are posted on this page.
      </Typography>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body2">
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us on
        <a href="mailto:info@masjidebilal.co.uk" className="underline">
          {' '}
          info@masjidebilal.co.uk
        </a>
      </Typography>
    </Box>
  )
}
