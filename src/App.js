import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import AddDocumentMarks from "./component/supervisor/documentEvaluation";
import DisplayDocumentMarks from "./component/supervisor/displayDocMraks";
import DocEvaluationUpdate from "./component/supervisor/updateDocMarks"

function App() {
    const user = localStorage.getItem("token");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/add" exact element={<AddDocumentMarks />} />
                <Route path="/displayDocMarks" exact element={<DisplayDocumentMarks />} />
                {<Route path="/updateDocMarks/:id" exact element={<DocEvaluationUpdate />} />}
            </Routes>
        </BrowserRouter>
    )
}

export default App;