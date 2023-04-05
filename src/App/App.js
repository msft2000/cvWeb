import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GeneralProvider } from "../context";
import { Login } from "../pages/Login";

function App() {
    return (
        <BrowserRouter>
            <GeneralProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </GeneralProvider>
        </BrowserRouter>
    );
}
export { App };