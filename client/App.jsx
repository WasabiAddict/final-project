import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./pages/Map.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Map />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;