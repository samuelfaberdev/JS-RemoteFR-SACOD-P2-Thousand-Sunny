import { Outlet } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App font-amarante">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
