import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Signup from "./component/Auth/SignUp/index";
import Login from "./component/Auth/Login/index.jsx";
import AdminPage from "./component/Admin/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/adminPage" exact element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
