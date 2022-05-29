import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import PanelMember from "./component/panel_member/feedback";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/panelFeedback" exact element={<PanelMember />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

