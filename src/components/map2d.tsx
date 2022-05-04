/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, ReactElement } from "react"
import { isArray } from "lodash"
import {
  MapContainer,
  LayersControl,
  TileLayer,
  WMSTileLayer,
  GeoJSON,
  Marker,
  Popup,
} from "react-leaflet"
// import "leaflet/dist/leaflet.css"
import { getAbsoluteUrl } from "../utils"
import { LatLngExpression } from "leaflet"
import province from "../../public/page-data/province_mada/mg.json"


console.log(province)

interface Props {
  format?: string
  idMap?: number
}

const Map2d = (props: Props) => {
  if (typeof window !== "undefined") {
    let className = "z-40"
    if (props.format === "min") {
      className += " h-120"
    } else {
      className += " h-192"
    }

    // Default id map (from mapstore)
    //TODO: pass as prop, get from api / admin
    const idMap = props.idMap

    // Default center, zoom
    //TODO: get from settings
    const center: number[] = [-18.87919, 47.507904]
    const zoom: number = 9
    const layers: any[] = []
    const position: LatLngExpression = [-18.87919, 47.507904]
    //

    // Get current map Object when ready (whenCreated)
    const [map, setMap] = useState(null)

    // Init default map context
    const [mapContext, setMapContext] = useState({
      center: {
        x: center[1],
        y: center[0],
      },
      zoom: zoom,
      layers: layers,
    })

    // Get Mapstore context
    //TODO: geostore API as param
    //TODO: check errors (geostore HS, idMap not valid)
    useEffect(() => {
      fetch(getAbsoluteUrl("/geoportail/rest/geostore/data/" + idMap))
        .then((response) => response.json())
        .then((resultData) => {
          setMapContext(resultData.map)
          // Update map view with context data
          if (map)
            // @ts-ignore
            map.setView(
              [resultData.map.center.y, resultData.map.center.x],
              resultData.map.zoom
            )
        })
        .catch((e) => {
          console.log(e)
        })
    }, [map, idMap])

    return (
      <div>
        <MapContainer
          center={[mapContext.center.y, mapContext.center.x]}
          zoom={mapContext.zoom}
          // @ts-ignore
          whenCreated={setMap}
          className={className}
          // scrollWheelZoom={false}
        >
          <LayersControl>
            {province.map((prov) => {
              let lat: number =+ prov.lat; 
              let lng: number =+ prov.lng; 
              return (
                <Marker position={[lat, lng]}>
                  <Popup>
                    Ville : {prov.city} <br/>
                    Population: {prov.population}
                  </Popup>
                </Marker>
              )
            })}
            {/* <Marker position={position}>
              <Popup>
                Voici <br /> my popup.
              </Popup>
            </Marker> */}
            <LayersControl.BaseLayer checked name="OpenStreetMap">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                maxZoom={30}
              />
            </LayersControl.BaseLayer>

            {
              // Load layers from context
              //TODO: add more layer.type
              //TODO: add array filter (chain)
              mapContext.layers.map((layer) => {
                if (isArray(layer.url)) return null
                switch (layer.type) {
                  case "vector":
                    return (
                      <LayersControl.Overlay
                        checked={layer.visibility}
                        name={layer.name}
                      >
                        <GeoJSON
                          data={layer.features}
                          pathOptions={layer.style || ""}
                        />
                      </LayersControl.Overlay>
                    )
                  case "wfs":
                    break
                  case "wms":
                    return (
                      <LayersControl.Overlay
                        checked={layer.visibility}
                        name={layer.title}
                      >
                        <WMSTileLayer
                          layers={layer.name}
                          format={layer.format}
                          transparent={true}
                          url={layer.url}
                          styles={layer.style || ""}
                          maxZoom={30}
                        />
                      </LayersControl.Overlay>
                    )
                }
                return null
              })
            }
          </LayersControl>
        </MapContainer>
      </div>
    )
  }

  return <div ref="map2d">map</div>
}

export default Map2d
