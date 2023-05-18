import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Footer() {
    return (
        <div class="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Webtoons</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Upload</a></li>
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
                <p className="copyright">Company Name © 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}