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
function App() {
  const [data, setData] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch('http://127.0.0.1:8000/').then(response => response.json()).then((result) => {
      // setData(JSON.stringify(result)) 
      setData(result)
      console.log(data)
    }).then(() => setImage(data.map(item => {
      return <img src={`http://127.0.0.1:8000/media/${item.cover}`}></img>;
    })))
  },
    [data == ""])

  // axios({
  //   method: 'post',
  //   url: 'http://127.0.0.1:8000/',
  //   headers: {
  //     "X-CSRFToken": CSRF_TOKEN, 
  //     "content-type": "application/json"
  //   }
  // }).then(function (response) {
  //   console.log(response)
  // }).catch(function (error) {
  //   console.log(error)
  // });
  return (
    <div className="App">
      <div id="carouselsection">
      </div>
      <div style={{ position: 'fixed', top:0, maxWidth:'100%' }}>
        <div>
          <PrimarySearchAppBar />
        </div>
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
        <Carousel>
          <Carousel.Item>
            {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        /> */}
            <div class="carouselimage">
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
            <div class="carouselimage">
              {image[1]}
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div class="carouselimage">
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
      <div>
        <br></br>
        <h1>
          Latest Releases
        </h1>
        <Divider light={false} sx={{border: '2px solid black'}} />
      </div>
    </div>
  );
}

export default App;
