import { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Geometry } from 'ol/geom';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';

import './map-wrap.scss';
import XYZ from 'ol/source/XYZ';

export interface MapWrapProps {
  features: Feature[];
}

function MapWrap(props: MapWrapProps) {
  const [map, setMap] = useState<Map>();
  const [featuresLayer, setFeaturesLayer] =
    useState<VectorLayer<VectorSource<Geometry>>>();
  const [selectedCoord, setSelectedCoord] = useState();

  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initalFeaturesLayer = new VectorLayer({ source: new VectorSource() });
    const source = new XYZ({
      url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
    });
    if (mapElement.current != null) {
      const tileLayer = new TileLayer({ source });

      const view = new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 2,
      });

      // create map
      const initialMap = new Map({
        target: mapElement.current,
        layers: [tileLayer, initalFeaturesLayer],
        view: view,
        controls: [],
      });

      setMap(initialMap);
      setFeaturesLayer(initalFeaturesLayer);
    }
  }, []);

  useEffect(() => {
    const features = props.features;
    if (features.length) {
      if (featuresLayer && map) {
        const source = new VectorSource({ features });
        featuresLayer.setSource(source);
       
        map.getView().fit(source.getExtent(), {
          padding: [100, 100, 100, 100],
        });
      }
    }
  }, [featuresLayer, map, props.features]);

  return <div ref={mapElement} className="map-container"></div>;
}

export default MapWrap;
