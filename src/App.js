import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Screens/Home";
import LogIn from "./Screens/LogIn";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark-5.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./Screens/SignUp";
import MyOrder from "./Screens/MyOrder";

function App() {
  return (
    <div>
      {" "}
      <Routes>
        {/* {localStorage.getItem("authtoken") ? ( */}
          <Route path="/" element={<Home />} />
        {/* ) : (
          ""
        )} */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myOrder" element={<MyOrder />} />
      </Routes>
    </div>
  );
}

export default App;
