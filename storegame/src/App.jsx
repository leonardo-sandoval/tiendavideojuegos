import React from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/store";
import Home from "./pages/Home";
import Stream from "./pages/Streams";
import New from "./pages/News";
import Header from "./Header";


function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/store" element={<Store />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
