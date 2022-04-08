import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx";
import MapPage from "./pages/MapPage.jsx";
import SubmissionForm from "./pages/SubmissionForm.jsx";

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
            <Routes>
                <Route path="/MapPage" element={<MapPage/>} />
                {/* <Route path="/map/:type" element={}/> */}
            </Routes>
        </BrowserRouter>
    )
};

export default App;