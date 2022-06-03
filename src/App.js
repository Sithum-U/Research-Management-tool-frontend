import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PanelMember from "./component/panel_member/feedback";
import Presentation from "./component/panel_member/Presentation";
import PanelDash from "./component/panel_member/PanelDash";
import Mail from "./component/panel_member/Mail";
import ViewPresentationMarks from "./component/panel_member/viewPresentationMarks";
import AddDocumentMarks from "./component/supervisor/documentEvaluation";
import DisplayDocumentMarks from "./component/supervisor/displayDocMraks";
import DocEvaluationUpdate from "./component/supervisor/updateDocMarks"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/panelFeedback" exact element={<PanelMember />} />
                <Route path="/presentation" exact element={<Presentation />} />
                <Route path="/panelDash" exact element={<PanelDash />} />
                <Route path="/mail" exact element={<Mail />} />
                <Route path="/viewpresentationmarks" exact element={<ViewPresentationMarks />} />
                <Route path="/add" exact element={<AddDocumentMarks />} />
                <Route path="/displayDocMarks" exact element={<DisplayDocumentMarks />} />
                <Route path="/updateDocMarks/:id" exact element={<DocEvaluationUpdate />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;