import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Updategroup from "./component/Student/updategroup";
import Docsubmit from "./component/Student/docsubmit";
import Findtopic from "./component/Student/findtopic";
import StudentDetailsTable from "./component/Student/viewgroup";
import Create from "./component/Student/creategroup";
import Dashboard from "./component/Student/dashboard";

import PanelMember from "./component/panel_member/feedback";
import Presentation from "./component/panel_member/Presentation";
import PanelDash from "./component/panel_member/PanelDash";
import Mail from "./component/panel_member/Mail";
import ViewPresentationMarks from "./component/panel_member/viewPresentationMarks";
import AddDocumentMarks from "./component/supervisor/documentEvaluation";
import DisplayDocumentMarks from "./component/supervisor/displayDocMraks";
import DocEvaluationUpdate from "./component/supervisor/updateDocMarks"


function App() {
  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/update/:id" exact element={<Updategroup />} />
        <Route path="/doc" exact element={<Docsubmit />} />
        <Route path="/find" exact element={<Findtopic />} />
        <Route path="/create" exact element={<Create />} />
        <Route path="/view" exact element={<StudentDetailsTable />} />
        {<Route path="/dashboard" exact element={<Dashboard />} />}

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
  );
}

export default App;
