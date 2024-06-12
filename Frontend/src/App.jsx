import "./App.css";
import SideBar from "./components/leftPanel/sidebar.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp.jsx";
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<SideBar />} />
          {/* For now '/' end point is kept for login, but when we go to authentication part '/login' endpoint will be used for login */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
