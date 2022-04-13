import React from "react";
import MapDemo from "./MapDemo.jsx"
import "../mapdemopage.css";


const MapDemoPage = () => {
    return (
        <><div className="container">
            <div className="row">
                <div className="col-2 mt-5">
                    <div className="infobox">
                        <h1 className="text-center font-weight-bold text-white">Avg. Price of Recyclable Metals per Pound in Alabama</h1>
                        <h2 className="text-center text-white metalprice">Aluminum Cans $0.3 USD/LB</h2>
                        <h2 className="text-center text-white metalprice">Yellow Brass Scrap $0.90 USD/LB</h2>
                        <h2 className="text-center text-white metalprice">#1 Copper Scrap $2.35 USD/LB </h2>
                        <h2 className="text-center text-white metalprice">#2 Copper Scrap $2.12 USD/LB</h2>
                        <h2 className="text-center text-white metalprice">Lead Scrap $0.31 USD/LB</h2>
                        <h2 className="text-center text-white metalprice">304 Stainless Steel Scrap $0.16 USD/LB</h2>
                    </div>
                </div>


                <div className="col-10 mapbox mt-5">
                    <MapDemo/> 
                </div>


               
            </div>

        </div>
        
            <div className="row">
                <div className="col-12">
                   
                </div>
            </div>

        
        
        </>
    )
}

export default MapDemoPage