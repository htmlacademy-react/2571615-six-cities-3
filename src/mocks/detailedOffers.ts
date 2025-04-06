import { DetailedOffers } from '../types/offers';

const detailedOffers: DetailedOffers = [
  {
    id: 'bb24c641-a20b-4bfd-8731-2db7fa55f5a7',
    title: 'Tile House',
    type: 'hotel',
    price: 497,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false,
    },
    images: ['https://url-to-image/image.png'],
    maxAdults: 4,
  },
  {
    id: 'a65fed04-5db4-4fbb-936b-c699e56269c8',
    title: 'Studio in the Central Area',
    type: 'house',
    price: 821,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.7,
    description:
      'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    bedrooms: 1,
    goods: [
      'Kitchen',
      'Towels',
      'Washing machine',
      'Heating',
      'Air conditioning',
      'Coffee machine',
      'Dishwasher',
      'Wi-Fi',
      'Washer',
      'Laptop friendly workspace',
      'Fridge',
      'Breakfast',
      'Baby seat',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    images: ['https://url-to-image/image.png'],
    maxAdults: 2,
  },
  {
    id: '7236b959-68e2-4c07-961d-65c0c0b5bca0',
    title: 'Apartment at great location',
    type: 'room',
    price: 226,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    description:
      'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    bedrooms: 1,
    goods: [
      'Towels',
      'Breakfast',
      'Cable TV',
      'Heating',
      'Washer',
      'Laptop friendly workspace',
      'Kitchen',
      'Wi-Fi',
      'Washing machine',
      'Fridge',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    images: ['https://url-to-image/image.png'],
    maxAdults: 6,
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description:
      'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    bedrooms: 2,
    goods: [
      'Fridge',
      'Wi-Fi',
      'Dishwasher',
      'Washer',
      'Heating',
      'Baby seat',
      'Towels',
      'Air conditioning',
      'Washing machine',
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl:
        'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
    },
    images: ['https://url-to-image/image.png'],
    maxAdults: 10,
  },
];

export default detailedOffers;
