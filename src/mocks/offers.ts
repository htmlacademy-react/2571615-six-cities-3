import { Offers } from '../types/offers';

const offers: Offers = [
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
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: 'bb24c641-a20b-4bfd-8731-2db7fa55f5a7',
    title: 'Tile House',
    type: 'hotel',
    price: 497,
    previewImage: 'img/apartment-02.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.9,
  },
  {
    id: 'a65fed04-5db4-4fbb-936b-c699e56269c8',
    title: 'Studio in the Central Area',
    type: 'house',
    price: 821,
    previewImage: 'img/apartment-03.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.7,
  },
  {
    id: '7236b959-68e2-4c07-961d-65c0c0b5bca0',
    title: 'Apartment at great location',
    type: 'room',
    price: 226,
    previewImage: 'img/room.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
  },
];

export default offers;
