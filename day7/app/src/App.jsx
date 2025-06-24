import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import ListUser from "./component/ListUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListUser" element={<ListUser />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
