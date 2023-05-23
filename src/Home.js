import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import PrimarySearchAppBar from './Navbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import './index.css'
import { Divider } from '@mui/material';
import Manga from './Manga';
import Altnavbar from './Navbar';
import './nav.scss';
import { Link } from 'react-router-dom';

function App() {
  const [mangas, setMangas] = useState([null])
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  // const [allratings, setAllratings] = useState([]);
  // const [average, setAverage] = useState([]);
  useEffect(() => {
    fetchAPI()
  },
    [data == ""])

  async function fetchAPI() {
    try {
      const response = await fetch('https://mangaworld.herokuapp.com/')
      if (response.ok) {
        let result = await response.json();
        setData(result);
        setImage(data.map(item => {
          return <Link to={`/Openmanga/${item.id}`}><img src={`https://mangaworld.herokuapp.com/media/${item.cover}`}></img></Link>;
        }))
        data.slice(0,3).map(item => {
          let allratings=(item.ratings)
          setMangas(
          prevState => [...prevState,
          <div style={{ display: 'flex', justifyContent: 'center', textDecoration:'none !important' }}>
            <Manga allratings={allratings} genres={item.genres}  date={item.date[0]} image={item.cover}  title={item.label} id={item.id}/>
          </div>]
          )
        }
        )
      }
      else { return console.log('falied') }
    } catch (error) {
    }
  }

  return (
    <div className="Home">
      <div>
      <div id="carouselbackground">
      </div>
        <div id="carouselsection" style={{ position: 'relative', maxWidth: '100%', zIndex:10 }}>
          <Carousel style={{position:'relative', marginTop:'10px',marginBottom:'100px'}}>
            <Carousel.Item>
              {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
              <div className="carouselimage">
                {image[0]}
              </div>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        /> */}
              <div className="carouselimage">
                {image[1]}
              </div>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselimage">
                {image[2]}
              </div>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
        {/* <Divider light={false} sx={{ border: '2px solid black' }} /> */}
        <h2 class="divider donotcross" contenteditable>Latest Releases</h2>
      </div>
      <br></br>
      <div id="mangas">
      {mangas}
      </div>
      <div id="mangas">
      {mangas}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
