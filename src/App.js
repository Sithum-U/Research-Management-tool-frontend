import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import AddDocumentMarks from "./component/supervisor/documentEvaluation";

function App() {
    const user = localStorage.getItem("token");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/add" exact element={<AddDocumentMarks />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;