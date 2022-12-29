import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./components/Header/GlobalStyle";
import HeaderComponents from "./components/Header/Header";
import "./index.css";
import Home from "./Pages/home/Home";


function App() {
  return (
    <>
    <GlobalStyle/>
      <HeaderComponents />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
