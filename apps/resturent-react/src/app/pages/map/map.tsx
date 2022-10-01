import Feature from 'ol/Feature';
import { useEffect, useState } from 'react';
import MapWrap from './map-wrap';
import GeoJSON from 'ol/format/GeoJSON'

import './map.scss';

export function Map() {
  const [ features, setFeatures ] = useState<Feature[]>([]);

  useEffect( () => {
    fetch('https://raw.githubusercontent.com/tcallsen/react-func-openlayers/master/public/mock-geojson-api.json')
      .then(response => response.json())
      .then( (fetchedFeatures) => {
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857'
        }
        const parsedFeatures = new GeoJSON().readFeatures(fetchedFeatures, wktOptions)
        setFeatures(parsedFeatures)
      })
  },[])

  return <MapWrap features={features} />;
}
