export type Property = {
  id: string
  lot: number
  name: string
  location: string
  acres: number
  price: string
  image: string
  blurb: string
  landComUrl: string
}

/** Sourced from Land Concepts listings on land.com (20 parcels). */
export const properties: Property[] = [
  {
    id: '29209277',
    lot: 1,
    name: 'Road 208 Farmland',
    location: '16605 Road 208, Porterville, CA',
    acres: 114.07,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593606158',
    blurb:
      'Premium farmland near Porterville — four parcels with income-producing citrus and open ground.',
    landComUrl:
      'https://www.land.com/property/114.07-acres-in-tulare-county-california/29209277/',
  },
  {
    id: '29209274',
    lot: 2,
    name: 'Avenue 24 Almonds',
    location: '5274 Avenue 24, Chowchilla, CA',
    acres: 82.71,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593606012',
    blurb:
      'Mature almonds planted 2013 (Nonpareil, Monterey, Wood Colony) with easy Highway 152 access.',
    landComUrl:
      'https://www.land.com/property/82.71-acres-in-madera-county-california/29209274/',
  },
  {
    id: '29209892',
    lot: 3,
    name: 'Kramer Rd Ranch',
    location: 'Earlimart, CA',
    acres: 65.93,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593678277',
    blurb:
      'Mature almonds with dual-source irrigation along Avenue 56, just east of Road 144.',
    landComUrl:
      'https://www.land.com/property/65.93-acres-in-tulare-county-california/29209892/',
  },
  {
    id: '29209993',
    lot: 4,
    name: 'Ave 48 & Rd 168',
    location: 'Earlimart, CA',
    acres: 156.28,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593688567',
    blurb:
      'Mature almond and cherry blocks (2016) sharing a central well, booster, and filtration site.',
    landComUrl:
      'https://www.land.com/property/156.28-acres-in-tulare-county-california/29209993/',
  },
  {
    id: '29212964',
    lot: 5,
    name: 'Beverly Residential Infill',
    location: 'Porterville, CA',
    acres: 65,
    price: '$55,000/acre',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593820290',
    blurb:
      'Low-density residential infill — two APNs, annexation underway, tentative tract map in process.',
    landComUrl:
      'https://www.land.com/property/apnnumber--259020006-porterville-california-93257/29212964/',
  },
  {
    id: '28695771',
    lot: 6,
    name: 'Avenue 184 Ranch',
    location: '12002 Avenue 184, Tulare, CA',
    acres: 1051.36,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6477953111',
    blurb:
      'Large Central Valley holding with grandfathered 1 MW SCE Legacy NEM 1.0 solar system.',
    landComUrl:
      'https://www.land.com/property/1051.36-acres-in-tulare-county-california/28695771/',
  },
  {
    id: '29209895',
    lot: 7,
    name: 'Road 136 Almonds',
    location: '1 Road 136, Delano, CA',
    acres: 77.97,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593678377',
    blurb:
      'Young almond orchard just north of the Kern/Tulare line with strong water infrastructure.',
    landComUrl:
      'https://www.land.com/property/77.97-acres-in-tulare-county-california/29209895/',
  },
  {
    id: '29209268',
    lot: 8,
    name: 'Road 164 Almonds',
    location: 'Earlimart, CA',
    acres: 57.05,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593605929',
    blurb:
      'Producing almonds (2013) — Nonpareil / Monterey / Wood Colony within Delano-Earlimart ID.',
    landComUrl:
      'https://www.land.com/property/57.05-acres-in-tulare-county-california/29209268/',
  },
  {
    id: '29211842',
    lot: 9,
    name: 'Dietz Rd Ranch',
    location: 'Earlimart, CA',
    acres: 320,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593718334',
    blurb:
      '320 acres adjacent to Earlimart town limits — young orchard blocks plus mature almond acreage.',
    landComUrl:
      'https://www.land.com/property/320-acres-in-tulare-county-california/29211842/',
  },
  {
    id: '29212983',
    lot: 10,
    name: 'Highway 190 Porterville',
    location: 'Hwy 190, Porterville, CA',
    acres: 102.72,
    price: '$50,000/acre',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593820553',
    blurb:
      'Master-plan scale single APN — mixed residential, mixed use, and neighborhood commercial.',
    landComUrl:
      'https://www.land.com/property/hwy-190-porterville--porterville-california-93257/29212983/',
  },
  {
    id: '29213881',
    lot: 11,
    name: 'Washington / Armstrong',
    location: '784 Armstrong Avenue, Earlimart, CA',
    acres: 77.2,
    price: '$50,000/acre',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593868349',
    blurb:
      'R-1 residential land contiguous to existing development, across from Alila Elementary.',
    landComUrl:
      'https://www.land.com/property/784-armstrong-avenue-earlimart-california-93219/29213881/',
  },
  {
    id: '29209919',
    lot: 12,
    name: 'Armstrong Almond Ranch',
    location: 'Earlimart, CA',
    acres: 81.7,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593679132',
    blurb:
      'Mature income-producing almonds in a reliable DEID surface-water area.',
    landComUrl:
      'https://www.land.com/property/81.7-acres-in-tulare-county-california/29209919/',
  },
  {
    id: '28695775',
    lot: 13,
    name: 'Road 208 Portfolio Listing',
    location: '16605 Road 208, Porterville, CA',
    acres: 114.07,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6477953248',
    blurb:
      'Porterville farmland package — citrus and open ground across four parcels.',
    landComUrl:
      'https://www.land.com/property/114.07-acres-in-tulare-county-california/28695775/',
  },
  {
    id: '28695779',
    lot: 14,
    name: 'Highway 99 Frontage',
    location: 'Road 112, Tulare, CA',
    acres: 145,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6477953399',
    blurb:
      'About 145 acres on both sides of Highway 99 — productive crops plus highway visibility.',
    landComUrl:
      'https://www.land.com/property/145-acres-in-tulare-county-california/28695779/',
  },
  {
    id: '28824948',
    lot: 15,
    name: 'Porterville Commercial Bundle',
    location: 'Porterville, CA',
    acres: 274.7,
    price: '$14,025,000',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6507190503',
    blurb:
      'Three properties available together or separately — Highway 190 master-plan opportunity included.',
    landComUrl:
      'https://www.land.com/property/274.7-acres-in-tulare-county-california/28824948/',
  },
  {
    id: '28824237',
    lot: 16,
    name: 'Earlimart Commercial Bundle',
    location: '1 Washington St, Earlimart, CA',
    acres: 143,
    price: '$7,125,000',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6507155241',
    blurb:
      'Development-scale assembly including Valente St mixed-use / C2 commercial acreage.',
    landComUrl:
      'https://www.land.com/property/1-washington-st-earlimart-california-93219/28824237/',
  },
  {
    id: '28695782',
    lot: 17,
    name: 'Cleveland Road Ranch',
    location: 'El Nido, CA',
    acres: 174.3,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6477953460',
    blurb:
      'Almonds and open ground in Merced Irrigation District with surface water deliveries.',
    landComUrl:
      'https://www.land.com/property/174.3-acres-in-merced-county-california/28695782/',
  },
  {
    id: '29212987',
    lot: 18,
    name: 'Hwy 65 & Hwy 190 Gateway',
    location: 'Porterville, CA',
    acres: 107,
    price: '$50,000/acre',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6593820664',
    blurb:
      'NW corner of Highways 65 & 190 — mixed residential, mixed use, and professional office.',
    landComUrl:
      'https://www.land.com/property/apnnumber--259030031-porterville-california-93257/29212987/',
  },
  {
    id: '28695765',
    lot: 19,
    name: 'Howard Road Parcel',
    location: '1 Howard Road, Earlimart, CA',
    acres: 41.36,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6487137022',
    blurb:
      'Ag and development parcel on Road 128 / Howard Road in the path of residential expansion.',
    landComUrl:
      'https://www.land.com/property/41.36-acres-in-tulare-county-california/28695765/',
  },
  {
    id: '28695769',
    lot: 20,
    name: 'Road 120 Earlimart',
    location: 'Road 120, Earlimart, CA',
    acres: 99.87,
    price: 'Call for price',
    image: 'https://assets.land.com/resizedimages/800/600/h/80/1-6477953002',
    blurb:
      'Deep ag well, Deer Creek frontage, residential improvements, and grandfathered 51 kW NEM-1 solar.',
    landComUrl:
      'https://www.land.com/property/road-120-tulare-california-93219/28695769/',
  },
]

export const listingsSourceUrl =
  'https://www.land.com/member/land-concepts-ag-real-estate/4056341/listings/'
