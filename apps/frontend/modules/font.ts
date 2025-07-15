import { Geist, Instrument_Serif } from 'next/font/google'

export const instrument = Instrument_Serif({
  weight: ['400'],
  variable: '--font-instrument',
  subsets: ['latin'],
})

export const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})
