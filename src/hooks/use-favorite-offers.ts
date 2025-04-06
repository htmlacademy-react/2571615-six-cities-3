import { useEffect } from 'react';
import { store } from '../store';
import { Offers } from '../types/offers';
import { uploadFavoriteOffers } from '../store/main-process/thunk-actions';

const useFavoriteOffers = (favoriteOffers: Offers | null, isAuth: boolean) => {
  useEffect(() => {
    if (!favoriteOffers && isAuth) {
      store.dispatch(uploadFavoriteOffers());
    }
  }, [favoriteOffers, isAuth]);
};

export { useFavoriteOffers };
