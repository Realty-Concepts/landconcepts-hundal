export type Property = {
  id: string
  name: string
  location: string
  acres: number
  price: string
  status: 'Available' | 'Under Contract' | 'Coming Soon'
  image: string
  blurb: string
}

export const properties: Property[] = [
  {
    id: 'oak-ridge',
    name: 'Oak Ridge Parcel',
    location: 'Sonoma County, CA',
    acres: 42,
    price: '$1.85M',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
    blurb: 'Rolling oak woodland with year-round creek frontage and dual access roads.',
  },
  {
    id: 'valley-view',
    name: 'Valley View Ranch',
    location: 'Napa Valley, CA',
    acres: 68,
    price: '$3.2M',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80',
    blurb: 'Elevated bench land with panoramic valley views and agricultural zoning.',
  },
  {
    id: 'meadow-creek',
    name: 'Meadow Creek Tract',
    location: 'Mendocino County, CA',
    acres: 120,
    price: '$2.4M',
    status: 'Coming Soon',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
    blurb: 'Expansive meadow and timber mix — ideal for conservation or private retreat.',
  },
  {
    id: 'ridge-line',
    name: 'Ridgeline Estates',
    location: 'Marin County, CA',
    acres: 18,
    price: '$4.1M',
    status: 'Under Contract',
    image:
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80',
    blurb: 'Build-ready hillside lots with utilities stubbed and coastal-range outlooks.',
  },
]
