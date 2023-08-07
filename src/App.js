import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Screens/Home";
import LogIn from "./Screens/LogIn";
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark-5.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </div>
  );
}

export default App;
