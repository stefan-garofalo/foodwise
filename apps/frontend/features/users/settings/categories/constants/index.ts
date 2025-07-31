import {
  Amphora,
  Apple,
  Barrel,
  CakeSlice,
  Cookie,
  CupSoda,
  Drumstick,
  Fish,
  LeafyGreen,
  Martini,
  Milk,
  Wheat,
} from 'lucide-react'

export const CATEGORIES = [
  {
    Icon: Apple,
    name: 'fruit',
    label: 'FRUIT',
  },
  {
    Icon: LeafyGreen,
    name: 'vegetables',
    label: 'VEGETABLES',
  },
  {
    Icon: Drumstick,
    name: 'meat',
    label: 'MEAT',
  },
  {
    Icon: Fish,
    name: 'fish',
    label: 'FISH',
  },
  {
    Icon: Wheat,
    name: 'carbs',
    label: 'CARBS',
  },
  {
    Icon: Milk,
    name: 'dairy',
    label: 'DAIRY',
  },
  {
    Icon: CakeSlice,
    name: 'sweets',
    label: 'SWEETS',
  },
  {
    Icon: Cookie,
    name: 'snacks',
    label: 'SNACKS',
  },
  {
    Icon: CupSoda,
    name: 'beverages',
    label: 'BEVERAGES',
  },
  {
    Icon: Martini,
    name: 'alcohol',
    label: 'ALCOHOL',
  },
  {
    Icon: Barrel,
    name: 'pantry',
    label: 'PANTRY',
  },
  {
    Icon: Amphora,
    name: 'condiments',
    label: 'CONDIMENTS',
  },
] as const

export const COLORS = [
  {
    value: 'oklch(0.65 0.15 285)',
    label: 'LAVENDER',
    className: 'bg-[oklch(0.65_0.15_285)]',
  },
  {
    value: 'oklch(0.68 0.16 240)',
    label: 'SKY_BLUE',
    className: 'bg-[oklch(0.68_0.16_240)]',
  },
  {
    value: 'oklch(0.72 0.18 15)',
    label: 'CORAL_PINK',
    className: 'bg-[oklch(0.72_0.18_15)]',
  },
  {
    value: 'oklch(0.77 0.15 85)',
    label: 'GOLDEN',
    className: 'bg-[oklch(0.77_0.15_85)]',
  },
  {
    value: 'oklch(0.62 0.08 145)',
    label: 'SAGE',
    className: 'bg-[oklch(0.62_0.08_145)]',
  },
  {
    value: 'oklch(0.58 0.2 320)',
    label: 'PLUM',
    className: 'bg-[oklch(0.58_0.2_320)]',
  },
  {
    value: 'oklch(0.7 0.16 65)',
    label: 'AMBER',
    className: 'bg-[oklch(0.7_0.16_65)]',
  },
  {
    value: 'oklch(0.52 0.18 265)',
    label: 'INDIGO',
    className: 'bg-[oklch(0.52_0.18_265)]',
  },
] as const
