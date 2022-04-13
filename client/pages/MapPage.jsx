import React from "react";
import Map from "./Map.jsx";
import "../mappage.css";



const MapPage = () => {
    return (
        <><div className="container">
            <div className="row">
                <div className="col-2">
                    <div className="infobox">
                        <p className="text-center font-weight-bold text-white">Avg. Price of Recyclable Metals per Pound in Alabama</p>
                        <p className="text-center text-white">Aluminum Cans $0.3 USD/LB</p>
                        <p className="text-center text-white">Yellow Brass Scrap $0.90 USD/LB</p>
                        <p className="text-center text-white">#1 Copper Scrap $2.35 USD/LB </p>
                        <p className="text-center text-white">#2 Copper Scrap $2.12 USD/LB</p>
                        <p className="text-center text-white">Lead Scrap $0.31 USD/LB</p>
                        <p className="text-center text-white">304 Stainless Steel Scrap $0.16 USD/LB</p>
                    </div>
                </div>


                <div className="col-8 mt-2" >
                    <Map/> 
                </div>


                <div className="col-2">
                    <div className="infobox" >
                        <p className="text-center text-white">This where the info on relevant landfills will be displayed.</p>

                    </div>

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

export default MapPage