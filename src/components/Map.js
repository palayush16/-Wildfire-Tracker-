import GoogleMapReact from 'google-map-react'
import {useState} from 'react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center, zoom}) => {

    const [locationInfo,setLocationInfo] = useState(null)

    const markers=eventData.map(ev=>{
        if(ev.categories[0].id===8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=> setLocationInfo({ id: ev.id, title: ev.title })}/>
        }
        return null

    })

   
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyC7d5Fmb7Y7X1DwMkNc0xmTVBFt_PD6k88'}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
               {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
            
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat:40.4637,
        lng: 3.7492
    },
    zoom: 1
}

export default Map
