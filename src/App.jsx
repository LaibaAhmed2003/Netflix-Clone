import "./App.css";
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
