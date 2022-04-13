import React, { useState, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps"







const Map = () => {
    const [selectedLandfill, setSelectedLandfill] = useState(null)
    const [landfills, setLandFills] = useState([]);
    const [hours, setHours] = useState([])

    useEffect(() => {
        (async () => {
            const data = await fetch("/api/locations");
            const locations = await data.json();
            setLandFills(locations);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const hourinfo = await fetch("/api/times")
            const businesshours = await hourinfo.json()
            console.log(businesshours)
            setHours(businesshours)
        })();
    }, []);

    //useEffect(()=> {
    //    (async ()=> {
    //        
    //    })();
    //}, []);

    return (
        <>
            <GoogleMap style={{outerHeight: "100%", outerWidth: "100%"}} defaultZoom={10}
                defaultCenter={{ lat: 33.518589, lng: -86.810356 }}>

                {landfills.map(landfill => {
                    console.log(parseInt(landfill.latitude))
                    return <Marker
                        key={landfill.id}
                        position={{
                            lat: parseFloat(landfill.latitude),
                            lng: parseFloat(landfill.longitude)
                        }} onClick={() => {
                            setSelectedLandfill(landfill)
                        }}

                    //icon =   {require("client\assets\images.png")
                    //    icon = {{backgroundImage: url("../assets/images.png"),
                    //    height: "1em",
                    //    width: "1em"
                    // }}


                    />
                })}
                {selectedLandfill && (
                    <InfoWindow

                        position={{
                            lat: parseFloat(selectedLandfill.latitude),
                            lng: parseFloat(selectedLandfill.longitude)
                        }}
                        onCloseClick={() => {
                            setSelectedLandfill(null)

                        }}
                    >

                        <div>
                            {/* {hours.map(hour => (
                                <>
                                <h1>{hour.startTime}</h1>
                                <h1>{hour.endTime}</h1>
                                </>
                                
                            ))} */}
                        </div>
                    </InfoWindow>
                )}

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

