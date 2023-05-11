import { Routes, Route, useParams } from "react-router-dom"
import Home from "./Home"
import Openmanga from "./openmanga"
import Altnavbar from "./Navbar"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
        <Route path="/Openmanga/:mangaid" element={ <Openmanga /> } />
        <Route path="/categories" element={ <Openmanga /> } />
    </Routes>
    </div>
  )
}