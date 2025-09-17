import React from 'react'

interface PrayerIconProps extends React.SVGProps<SVGSVGElement> {}

const FajrIcon: React.FC<PrayerIconProps> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Horizon line - a solid bar */}
    <path d="M2 17H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Sun's visible arc (top half) */}
    <path
      d="M7 17C7 14.2386 9.23858 12 12 12C14.7614 12 17 14.2386 17 17H7Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
    />

    <path
      d="M12 12V10M15.464 13.464L17.585 11.343M19 17H22M17.585 6.414L15.464 8.536M12 5V2M8.536 6.414L6.415 8.536M5 17H2M6.415 11.343L8.536 13.464"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default FajrIcon
