import { Link, generatePath, useNavigate } from 'react-router-dom';
import { Offer } from '../../types/offers';
import { calculateRatingWidth, capitalizeWord } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { toggleFavoriteStatus } from '../../store/main-process/thunk-actions';
import { AppRoute } from '../../consts';
import { checkAuthentication } from '../../store/user-process/selectors';
import { memo } from 'react';
import classNames from 'classnames';

type PlaceCardProps = {
  offer: Offer;
  classNamePrefix: string;
  imageSize: { width: string; height: string };
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
};

function PlaceCardTemplate({
  offer,
  classNamePrefix,
  imageSize,
  onMouseEnter,
  onMouseLeave,
}: PlaceCardProps): JSX.Element {
  const isAuth = useAppSelector(checkAuthentication);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteButtonClick = () => {
    if (isAuth) {
      const status = offer.isFavorite ? 0 : 1;
      dispatch(toggleFavoriteStatus({ offerId: offer.id, status: status }));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <article className={`${classNamePrefix}__card place-card`}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}
      >
        <div
          onMouseEnter={() => onMouseEnter(offer.id)}
          onMouseLeave={onMouseLeave}
        >
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </div>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames({
              'place-card__bookmark-button button': true,
              'place-card__bookmark-button--active': offer.isFavorite
            })}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: calculateRatingWidth(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, {offerId: offer.id})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeWord(offer.type)}</p>
      </div>
    </article>
  );
}

const PlaceCard = memo(
  PlaceCardTemplate,
  (prevProps, nextProps) =>
    prevProps.offer.id === nextProps.offer.id &&
    prevProps.offer.isFavorite === nextProps.offer.isFavorite,
);

export default PlaceCard;
