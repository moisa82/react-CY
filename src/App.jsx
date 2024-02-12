//React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Register from "./pages/Register";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/events" element={<Events />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
