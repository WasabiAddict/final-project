import React, {useState, useEffect} from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"







const Map = () => {
    const [landfills, setLandFills] = useState([]);
    const [userLocation, setUserLocation] = useState({})

    useEffect(()=> {
        (async ()=> {
            const data = await fetch("/api/locations");
            const locations = await data.json();
            setLandFills(locations);
        })();
    }, []);

    //useEffect(()=> {
    //    (async ()=> {
    //        
    //    })();
    //}, []);

    return (
        <>
            <GoogleMap defaultZoom={10}
                defaultCenter={{ lat: 33.518589, lng: -86.810356 }}>

            </GoogleMap>
        </>
    )
}

export default function MapComponent() {
    return (
        <div className="" >
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7bkTx3LV_Q86V3P3LCHle4OmJnuQ5gOI"}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

