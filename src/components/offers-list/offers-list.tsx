import { memo, useCallback } from 'react';
import { PlaceCardImageSize, PlaceCardClassNamePrefix } from '../../consts';
import { Offer, Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offers;
  classNamePrefix: PlaceCardClassNamePrefix;
  onActiveCardChange?: (id: string | null) => void;
};

function OffersListTemplate({
  offers,
  classNamePrefix,
  onActiveCardChange,
}: OffersListProps): JSX.Element {
  const imageSize =
    classNamePrefix === PlaceCardClassNamePrefix.Favorites
      ? PlaceCardImageSize.SMALL
      : PlaceCardImageSize.LARGE;

  const handlePlaceCardMouseEnter = useCallback(
    (id: string) => {
      if (onActiveCardChange) {
        onActiveCardChange(id);
      }
    },
    [onActiveCardChange],
  );

  const handlePlaceCardMouseLeave = useCallback(() => {
    if (onActiveCardChange) {
      onActiveCardChange(null);
    }
  }, [onActiveCardChange]);

  return (
    <>
      {offers.map(
        (offer: Offer): JSX.Element => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            classNamePrefix={classNamePrefix}
            imageSize={imageSize}
            onMouseEnter={handlePlaceCardMouseEnter}
            onMouseLeave={handlePlaceCardMouseLeave}
          />
        ),
      )}
    </>
  );
}

const OffersList = memo(OffersListTemplate);

export default OffersList;
