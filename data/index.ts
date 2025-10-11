export type TimeTableType = {
  Isha: string
  Asar: string
  Zuhar: string
  Fajar: string
  Sunrise: string
  ishaJamaat: string
  maghribJamaat: string
  asarJamaat: string
  zuharJamaat: string
  fajarJamaat: string
  Hijrah: string
  Date: string
  Day: string
  Month: string
}

import timeTableData from './2025'

export const TimeTable: TimeTableType[] = timeTableData
