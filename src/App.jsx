import "bootstrap/dist/css/bootstrap.min.css";
import './styles/style.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";

import Layout from "./Layout/Layout";
import Todo from "./rltodo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/mobileapplications" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
