import { Route, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import Updategroup from "./component/Student/updategroup";
import Docsubmit from "./component/Student/docsubmit";
import Findtopic from "./component/Student/findtopic";
import StudentDetailsTable from "./component/Student/viewgroup";
import Create from "./component/Student/creategroup";
import Dashboard from "./component/Student/dashboard";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
