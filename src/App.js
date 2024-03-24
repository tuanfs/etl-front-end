import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Header from "./layouts/Header";
import Ca from "./views/Ca";
import Ak247 from "./views/Ak247";

export default function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ca" element={<Ca />} />
        <Route path="/ak247" element={<Ak247 />} />
      </Routes>
    </Header>
  );
}
