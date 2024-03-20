import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import Header from "./layouts/Header";
import Export from "./views/Export";

export default function App() {
  return (
    <Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/export" element={<Export />} />
      </Routes>
    </Header>
  );
}
