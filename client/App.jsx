import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
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
                <Route path="/SubmissionForm" element={<SubmissionForm/>} />
                {/* <Route path="/map/:type" element={}/> */}
            </Routes>
        </BrowserRouter>
    )
};

export default App;