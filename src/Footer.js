import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div class="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li><Link>Webtoons</Link></li>
                  <li><Link>Development</Link></li>
                  <li><Link>Upload</Link></li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li><Link>Company</Link></li>
                  <li><Link>Team</Link></li>
                  <li><Link>Legacy</Link></li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li><Link>Job openings</Link></li>
                  <li><Link>Employee success</Link></li>
                  <li><Link>Benefits</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 item social"><a href="https://www.facebook.com/levan.zardiashvili"><FacebookIcon /></a><a href="https://twitter.com/Leon33142075305"><TwitterIcon /></a><a href="#"><WhatsAppIcon /></a><a href="https://www.instagram.com/"><InstagramIcon /></a>
                <p className="copyright">Company Name © 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}