export interface ConstructionFunds {
  totalRequired: number
  totalPledged: number
  totalReceived: number
  remainingNeeds: number
}
interface CacheSchema {
  data: ConstructionFunds
  expiry: number
}

// services/sheetsService.ts
const SHEET_ID = '1XO7nQj6Wj1AyrCdW-9xR8fPNWAorOB7JZ773S3VRh88'
const API_KEY = 'AIzaSyAWLCTnZARrtmoFb1clU_CCdgLHd7xpruw'
const RANGE = 'Sheet1!A2:B5' // Adjust to your data range

const CACHE_KEY = 'mosque_construction_funds'
const CACHE_DURATION = 5 * 60 * 1000

export const fetchSheetData = async (): Promise<ConstructionFunds> => {

  const cached = localStorage.getItem(CACHE_KEY)
  if (cached) {
    console.log('Cached data found')
    const { data, expiry }: CacheSchema = JSON.parse(cached)
    if (Date.now() < expiry) {
      console.log('Serving from cache')
      return data
    }
  }
  console.log('No cached data found, fetching from API')
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (!data.values) throw new Error("No data found")
    const dataMap = Object.fromEntries(data.values)

    const funds: ConstructionFunds = {
      totalRequired: Number(dataMap["Total Required"]) || 0,
      totalPledged: Number(dataMap["Total Pledged"]) || 0,
      totalReceived: Number(dataMap["Total Received"]) || 0,
      remainingNeeds: Number(dataMap["Remaining Needs"]) || 0,
    }

    const cachePayload: CacheSchema = {
      data: funds,
      expiry: Date.now() + CACHE_DURATION,
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload))

    return funds
  } catch (error) {
    console.error('Error fetching sheet data:', error)
    if (cached) {
      const { data }: CacheSchema = JSON.parse(cached)
      return data
    }
    return {
      totalRequired: 0,
      totalPledged: 0,
      totalReceived: 0,
      remainingNeeds: 0,
    }
  }
}