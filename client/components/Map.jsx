import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function MapCenter() {
    return(
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:33.518589,lng:-86.810356}}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapCenter))

export default function Map() {
    return(
        <div style={{width: '800px', height: '800px'}}>
            <WrappedMap 
            googleMapURL = {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA0fD3oPWwimQhhYBBThscoNESU-YwVjlQ'}
            loadingElement = {<div style = {{ height: '100%'}}/>}
            containerElement = {<div style={{ height: '100%'}}/>}
            mapElement = {<div style = {{ height: '100% '}}/>}
            />
            </div>
    )
}