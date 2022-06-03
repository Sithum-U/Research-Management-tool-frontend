import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PanelMember from "./component/panel_member/feedback";
import Presentation from "./component/panel_member/Presentation";
import PanelDash from "./component/panel_member/PanelDash";
import Mail from "./component/panel_member/Mail";
import ViewPresentationMarks from "./component/panel_member/viewPresentationMarks";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/panelFeedback" exact element={<PanelMember />} />
                <Route path="/presentation" exact element={<Presentation />} />
                <Route path="/panelDash" exact element={<PanelDash />} />
                <Route path="/mail" exact element={<Mail />} />
                <Route path="/viewpresentationmarks" exact element={<ViewPresentationMarks />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

