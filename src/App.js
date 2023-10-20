import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Noticias from "./components/pages/Noticias";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Style.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        {/*<Route path="/timeline/:id" element={<TimeLine />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<CreatePost />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;


