import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Signup from "./component/Auth/SignUp/index";
import Login from "./component/Auth/Login/index.jsx";
import AdminPage from "./component/Admin/AdminPage/AdminPage";
// import Sidebar from "./component/Admin/sidebar/sidebar";
import Upload from "./component/Admin/pages/Upload";
import Home from "./component/Admin/pages/Home";
import SupervisorDetails from "./component/Admin/SupervisorDB/SupervisorDetails";
import CoSupervisorDetails from "./component/Admin/CoSupervisorDB/CoSupervisorDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/adminPage" exact element={<AdminPage />} />
        {/* <Route path="/sidebar" exact element={<Sidebar />} /> */}
        <Route path="/upload" exact element={<Upload />} />
        <Route path="/" exact element={<Home />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
