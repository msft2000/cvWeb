import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "../context";
import { Landing } from "../pages/Landing";

function App() {
    return (
        <BrowserRouter>
            <GeneralProvider>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </GeneralProvider>
        </BrowserRouter>
    );
}
export { App };