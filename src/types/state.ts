import { ThunkDispatch } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortBy } from '../consts';
import { store } from '../store';
import { DetailedOffer, Offers } from './offers';
import { Reviews } from './reviews';
import { createAPI } from '../services/api';
import { Action } from 'redux';
import { UserData } from './auth';

export type MainProcess = {
  city: string;
  initialOffers: null | Offers;
  sortBy: SortBy;
  isLoading: boolean;
  errorStatus: boolean;
  favoriteOffers: null | Offers;
};

export type OfferProcess = {
  currentOffer: null | DetailedOffer;
  nearbyOffers: null | Offers;
  reviews: null | Reviews;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<
  State,
  ReturnType<typeof createAPI>,
  Action
>;
