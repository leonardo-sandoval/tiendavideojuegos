import Header from "./componets/Header";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/store";
import Home from "./pages/Home";
import Stream from "./pages/Streams";
import New from "./pages/News";

function App() {
  return (
    <nav>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/store" element={<Store />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </nav>
  );
}

export default App;
