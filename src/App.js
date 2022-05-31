import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import PanelMember from "./component/panel_member/feedback";
import Presentation from "./component/panel_member/Presentation";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/panelFeedback" exact element={<PanelMember />} />
                <Route path="/presentation" exact element={<Presentation />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

