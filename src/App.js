import { Routes, Route, useParams } from "react-router-dom"
import Home from "./Home"
import Openmanga from "./openmanga"
import Altnavbar from "./Navbar"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from "./Categories";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Chapter from "./Chapter";
import Genremanga from "./Genremanga";
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
      <div class="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Web design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Hosting</a></li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Legacy</a></li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li><a href="#">Job openings</a></li>
                  <li><a href="#">Employee success</a></li>
                  <li><a href="#">Benefits</a></li>
                </ul>
              </div>
              <div className="col-lg-3 item social"><a href="#"><FacebookIcon /></a><a href="#"><TwitterIcon /></a><a href="#"><WhatsAppIcon /></a><a href="#"><InstagramIcon /></a>
                <p className="copyright">Company Name © 2018</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}