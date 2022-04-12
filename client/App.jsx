import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx";
import SubmissionForm from "./pages/SubmissionForm.jsx";
import MapPage from "./pages/MapPage.jsx";
// const App = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//             </Routes>
//         </BrowserRouter>
//     )
// };


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/Map" element={<MapPage/>} />
                {/* <Route path="/map/:type" element={}/> */}
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;

