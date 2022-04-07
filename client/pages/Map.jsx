import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
import withGoogleMap from "react-google-maps/lib/withGoogleMap";











const Map = () => {

    return (
        <>
            <GoogleMap defaultZoom={10}
                defaultCenter={{ lat: 33.518589, lng: -86.810356 }}
            />
        </>
    )
}

export default function App() {
    return (
        <div style = {{width: '100vw', height: '100vh'}}>
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7bkTx3LV_Q86V3P3LCHle4OmJnuQ5gOI"}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )


}

const WrappedMap = withScriptjs(withGoogleMap(Map))

