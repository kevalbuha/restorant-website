import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Screens/Home";
import LogIn from "./Screens/LogIn";

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
