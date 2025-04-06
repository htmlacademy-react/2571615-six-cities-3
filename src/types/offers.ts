export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type City = {
  name: string;
  location: OfferLocation;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type DetailedOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type DetailedOffers = DetailedOffer[];

export type Offers = Offer[];
