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
import './nav.scss'
function App() {
  const [mangas, setMangas] = useState([null])
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  console.log(mangas.length)
  useEffect(() => {
    fetchAPI()
  },
    [data == ""])

  async function fetchAPI() {
    try {
      const response = await fetch('http://127.0.0.1:8000/')
      if (response.ok) {
        let result = await response.json();
        setData(result);
        // do something with data
        setImage(data.map(item => {
          return <img src={`http://127.0.0.1:8000/media/${item.cover}`}></img>;
        }))
        for (let i = 0; i < result.length; i++) {
          setMangas(prevState => [...prevState,
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Manga />
          </div>])
          // mangas.push(
          //   <div style={{ display: 'flex', justifyContent: 'center' }}>
          //     <Manga />
          //   </div>
          // )
        }
      }
      else { return console.log('falied') }
    } catch (error) {
      // log your error, you can also return it to handle it in your calling function
    }
  }

  //     for (let i = 0; i = data.length; i++) {
  //   mangas.push(
  //     <div style={{ display: 'flex', justifyContent: 'center' }}>
  //       <Manga />
  //     </div>
  //   )
  // }
  return (
    <div className="App">
      <div id="carouselbackground">
      </div>
      <div>
      <div>
        <Altnavbar />
      </div>
        <div id="carouselsection" style={{ position: 'relative', top:'80px', maxWidth: '100%', zIndex:11 }}>
          {/* <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        MangaW
      </Typography> */}
          {/* <div style={{ marginLeft: 3 }}>
        This is a test
      </div> */}
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header> */}
          {/* {data.map(i.cover)} */}
          <Carousel style={{position:'relative', marginTop:'20px',marginBottom:'100px'}}>
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
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselimage">
                {image[2]}
              </div>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
    </div>
  );
}

export default App;
