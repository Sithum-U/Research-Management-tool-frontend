import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./component/Main";
import Signup from "./component/SignUp";
import Login from "./component/Login";
import User from "./component/User";
import Admin from "./component/Student";
import Dashboard from "./component/Student/dashboard";
import Docsubmit from "./component/Student/docsubmit";
import Create from "./component/Student/creategroup";
import Findtopic from "./component/Student/findtopic";

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
