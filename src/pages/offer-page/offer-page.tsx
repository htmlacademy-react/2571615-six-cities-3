import { Helmet } from 'react-helmet-async';
import { OfferLocation } from '../../types/offers';
import { useNavigate, useParams } from 'react-router-dom';
import { calculateRatingWidth, capitalizeWord } from '../../utils';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import { AppRoute, PlaceCardClassNamePrefix, Setting } from '../../consts';
import OffersList from '../../components/offers-list/offers-list';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { store } from '../../store';
import Loader from '../../components/loader/loader';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import {
  getCurrentOffer,
  getNearbyOffers,
} from '../../store/offer-process/selectors';
import { checkAuthentication } from '../../store/user-process/selectors';
import { uploadNearbyOffers, uploadOfferById } from '../../store/offer-process/thunk-actions';
import { toggleFavoriteStatus } from '../../store/main-process/thunk-actions';

function OfferPage(): JSX.Element {
  const currentOffer = useAppSelector(getCurrentOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const [points, setPoints] = useState<null | OfferLocation[]>(null);
  const { offerId } = useParams();
  const isAuth = useAppSelector(checkAuthentication);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (nearbyOffers) {
      setPoints(nearbyOffers.map((offer) => offer.location));
    }
  }, [nearbyOffers]);

  useEffect(() => {
    if (offerId && currentOffer?.id !== offerId) {
      store.dispatch(uploadOfferById(offerId));
      store.dispatch(uploadNearbyOffers(offerId));
    }
  }, [offerId, currentOffer]);

  const handleFavoriteButtonClick = () => {
    if (currentOffer) {
      if (isAuth) {
        const status = currentOffer.isFavorite ? 0 : 1;
        dispatch(
          toggleFavoriteStatus({ offerId: currentOffer.id, status: status }),
        );
      } else {
        navigate(AppRoute.Login);
      }
    }
  };

  if (!currentOffer || currentOffer.id !== offerId) {
    return <Loader />;
  }

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities: Offer</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {currentOffer.images
              .slice(0, Setting.OfferImagesCount)
              .map((imageSrc) => (
                <div className="offer__image-wrapper" key={imageSrc}>
                  <img
                    className="offer__image"
                    src={imageSrc}
                    alt="Photo studio"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {currentOffer.isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{currentOffer.title}</h1>
              <button
                className={classNames({
                  'offer__bookmark-button button': true,
                  'offer__bookmark-button--active': currentOffer.isFavorite,
                })}
                type="button"
                onClick={handleFavoriteButtonClick}
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span
                  style={{ width: calculateRatingWidth(currentOffer.rating) }}
                >
                </span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {currentOffer.rating}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {capitalizeWord(currentOffer.type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {currentOffer.bedrooms > 1
                  ? `${currentOffer.bedrooms} Bedrooms`
                  : `${currentOffer.bedrooms} Bedroom`}
              </li>
              <li className="offer__feature offer__feature--adults">
                {currentOffer.maxAdults > 1
                  ? `Max ${currentOffer.maxAdults} Adults`
                  : `Max ${currentOffer.maxAdults} Adult`}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {currentOffer.goods.map((feature) => (
                  <li
                    className="offer__inside-item"
                    key={feature + currentOffer.id}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div
                  className={classNames({
                    'offer__avatar-wrapper user__avatar-wrapper': true,
                    'offer__avatar-wrapper--pro': currentOffer.host.isPro,
                  })}
                >
                  <img
                    className="offer__avatar user__avatar"
                    src={currentOffer.host.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">
                  {currentOffer.host.name}
                </span>
                {currentOffer.host.isPro && (
                  <span className="offer__user-status">Pro</span>
                )}
              </div>
              <div className="offer__description">
                <p className="offer__text">{currentOffer.description}</p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              {offerId && <ReviewList offerId={offerId} />}
              {isAuth && <ReviewForm offerId={offerId} />}
            </section>
          </div>
        </div>
        <section className="offer__map map">
          {points && (
            <Map
              cityLocation={currentOffer.city.location}
              points={[...points, currentOffer.location]}
              selectedPoint={currentOffer.location}
            />
          )}
        </section>
      </section>
      <div className="container">
        {nearbyOffers && (
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearbyOffers}
                classNamePrefix={PlaceCardClassNamePrefix.Offer}
              />
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default OfferPage;
