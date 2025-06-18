import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";  // Updated import path
import Home from "./Components/Home";
import Login from "./Components/Login";
import Products from "./Components/Products";
import AddSeller from "./Components/AddSeller";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addseller" element={<AddSeller />} />
      </Routes>
    </div>
  );
}

export default App;