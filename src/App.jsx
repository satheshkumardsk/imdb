import { Route, Routes } from "react-router-dom";

//pages
import HomePage from "./pages/home";

//components
import NavBar from "./components/navbar";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
