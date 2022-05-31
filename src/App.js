import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import User from "./components/User";
import Admin from "./components/Admin";
import Dashboard from "./components/Admin/dashboard";
import Docsubmit from "./components/Admin/docsubmit";
import Create from "./components/Admin/creategroup";
import Findtopic from "./components/Admin/findtopic";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {<Route path="/main" exact element={<Main />} />}
      {<Route path="/user" exact element={<User />} />}
      {<Route path="/admin" exact element={<Admin />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/doc" exact element={<Docsubmit/>}/>
      <Route path="/find" exact element={<Findtopic />} />
      <Route path="/create" exact element={<Create/>}/>

      {/* <Route path="/findtopic" exact element={<Findtopic />} /> */}
      <Route path="/" element={<Navigate replace to="/login" />} />

      {<Route path="/dashboard" exact element={<Dashboard />} />}
      {/* {<Route path="/updateHotel/:id" exact element={<HotelUpdate />} />} */}
    </Routes>
  );
}

export default App;
