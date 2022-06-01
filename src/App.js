import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./component/Auth/SignUp/index";
import Login from "./component/Auth/Login/index.jsx";
import AdminPage from "./component/Admin/AdminPage/AdminPage";
// import Sidebar from "./component/Admin/sidebar/sidebar";
import Upload from "./component/Admin/pages/Upload";
import Home from "./component/Admin/pages/Home";
import SupervisorDetails from "./component/Admin/SupervisorDB/SupervisorDetails";
import CoSupervisorDetails from "./component/Admin/CoSupervisorDB/CoSupervisorDetails";
import StudentDetails from "./component/Admin/StudentDB/StudentDetails";
import PanelMemberDetails from "./component/Admin/PanelMemberDB/PanelMember";
import "./App.css";

import AppRouter from "../src/component/Admin/FileUpload/AppRouter";
import Header from "../src/component/Admin/FileUpload/Header";
import FilesList from "../src/component/Admin/FileUpload/FilesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/adminPage" exact element={<AdminPage />} />
        {/* <Route path="/sidebar" exact element={<Sidebar />} /> */}
        {/* <Route path="/upload" exact element={<Upload />} /> */}
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route
          path="/supervisorDetails"
          exact
          element={<SupervisorDetails />}
        />
        <Route
          path="/co-supervisorDetails"
          exact
          element={<CoSupervisorDetails />}
        />
        <Route path="/studentDetails" exact element={<StudentDetails />} />
        <Route
          path="/panelMemberDetails"
          exact
          element={<PanelMemberDetails />}
        />
        {/* <div className="container"> */}
        {/* <Header /> */}
        {/* <div className="main-content"> */}
        <Route path="/" exact element={<AppRouter />} />
        <Route path="/list" exact element={<FilesList />} />
        {/* </div> */}
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
