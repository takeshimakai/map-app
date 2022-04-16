import Script from 'next/script'
import { useContext } from 'react'
import { MapContainer, TileLayer, ZoomControl, Marker, useMapEvent } from 'react-leaflet'
import StatusContext from '../../context/StatusContext'

const Map = ({ posts, clickCoords, setClickCoords }) => {
  const { isLoggedIn } = useContext(StatusContext)

  const GetCoords = () => {
    useMapEvent('click', (e) => setClickCoords(e.latlng))
    return null
  }

  return (
    <>
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      />
      <MapContainer
        center={[45.5017, -73.5673]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {isLoggedIn &&
          posts.map(post => (
            <Marker key={post.id} position={[post.coords.lat, post.coords.lng]} />
          ))
        }
        {clickCoords && <Marker position={[clickCoords.lat, clickCoords.lng]} />}
        <GetCoords />
      </MapContainer>
    </>
  )
}

export default Map