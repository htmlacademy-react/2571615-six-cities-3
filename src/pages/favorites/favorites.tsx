import { Helmet } from 'react-helmet-async';
import { CITIES, PlaceCardClassNamePrefix } from '../../consts';
import OffersList from '../../components/offers-list/offers-list';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { getFavoriteOffers } from '../../store/main-process/selectors';
import { checkAuthentication } from '../../store/user-process/selectors';
import { Footer } from '../../components/footer/footer';
import { useFavoriteOffers } from '../../hooks/use-favorite-offers';
import React from 'react';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isAuth = useAppSelector(checkAuthentication);

  useFavoriteOffers(favoriteOffers, isAuth);

  if (favoriteOffers?.length === 0) {
    return (
      <React.Fragment>
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <main className="page__main page__main--favorites">
        <Helmet>
          <title>6 cities: Favorites</title>
        </Helmet>
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteOffers &&
                CITIES.map((city) => {
                  const cityOffers = favoriteOffers.filter(
                    (offer) => offer.city.name === city,
                  );
                  if (cityOffers.length > 0) {
                    return (
                      <li className="favorites__locations-items" key={city}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <a className="locations__item-link" href="#">
                              <span>{city}</span>
                            </a>
                          </div>
                        </div>
                        <div className="favorites__places">
                          <OffersList
                            offers={cityOffers}
                            classNamePrefix={PlaceCardClassNamePrefix.Favorites}
                          />
                        </div>
                      </li>
                    );
                  }
                })}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Favorites;
