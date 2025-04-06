import leaflet from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { OfferLocation } from '../types/offers';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityLocation: null | OfferLocation,
) {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (
      mapRef.current !== null &&
      !isRenderedRef.current &&
      cityLocation !== null
    ) {
      const mapInstance = leaflet.map(mapRef.current, {
        center: { lat: cityLocation.latitude, lng: cityLocation.longitude },
        zoom: cityLocation.zoom,
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(mapInstance);
      setMap(mapInstance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityLocation]);

  return map;
}

export default useMap;
