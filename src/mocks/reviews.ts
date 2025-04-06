import { Reviews } from '../types/reviews';

const reviews: Reviews = [
  {
    id: '9ffd2f0c-886e-4234-b508-0bfeef58b423',
    comment:
      'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    date: '2024-02-13T21:00:00.030Z',
    rating: 5,
    user: {
      name: 'Jack',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true,
    },
  },
  {
    id: '3b4c32ff-0be1-4edf-9cfb-e1a90a30c8a3',
    comment:
      'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2024-02-10T21:00:00.030Z',
    rating: 3,
    user: {
      name: 'Emely',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/7.jpg',
      isPro: true,
    },
  },
  {
    id: 'de441faa-bcd0-44c4-919b-e7b0c28b734b',
    comment:
      'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2024-02-11T21:00:00.030Z',
    rating: 3,
    user: {
      name: 'Emely',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/10.jpg',
      isPro: false,
    },
  },
];

export default reviews;
