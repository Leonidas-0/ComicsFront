import { Routes, Route, useParams } from "react-router-dom"
import Home from "./Home"
import Openmanga from "./openmanga"
import Altnavbar from "./Navbar"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from "./Categories";
import Chapter from "./Chapter";
import Genremanga from "./Genremanga";
import Footer from "./Footer"; 
export default function App() {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <div className="App">
      <Altnavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Openmanga/:mangaid" element={<Openmanga />} />
        <Route path="/Genres" element={<Categories />} />
        <Route path="/:mangaid/:chapterid" element={<Chapter />} />
        <Route path="/:genreid" element={<Genremanga />} />
      </Routes>
      <Footer />
    </div>
  )
}