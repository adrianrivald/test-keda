import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./layout/header";
import { lazy } from "react";
import { Footer } from "./layout/footer";

const HomePage = lazy(() => import("./routes/home"));

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="pt-[128px]">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
