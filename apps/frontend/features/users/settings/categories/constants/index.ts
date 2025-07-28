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
  },
  {
    Icon: LeafyGreen,
    name: 'vegetables',
  },
  {
    Icon: Drumstick,
    name: 'meat',
  },
  {
    Icon: Fish,
    name: 'fish',
  },
  {
    Icon: Wheat,
    name: 'bakery',
  },
  {
    Icon: Milk,
    name: 'dairy',
  },
  {
    Icon: CakeSlice,
    name: 'sweets',
  },
  {
    Icon: Cookie,
    name: 'snacks',
  },
  {
    Icon: CupSoda,
    name: 'beverages',
  },
  {
    Icon: Martini,
    name: 'alcohol',
  },
  {
    Icon: Barrel,
    name: 'pantry',
  },
  {
    Icon: Amphora,
    name: 'condiments',
  },
] as const
