import Manga from "./Manga";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
export default function Genremanga() {
    let { genreid } = useParams();
    console.log(genreid)
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
        const response = await fetch(`https://mangaworld.herokuapp.com/genresearch/${genreid}`)
        if (response.ok) {
          let result = await response.json();
          setData(result);
          console.log(result)
          setImage(data.map(item => {
            return <img src={`https://mangaworld.herokuapp.com/media/${item.cover}`}></img>;
          }))
          data.slice(0,3).map(item => {
            console.log()
            let allratings=(item.ratings)
            setMangas(
            prevState => [...prevState,
            <div style={{ display: 'flex', justifyContent: 'center', textDecoration:'none !important' }}>
              <Manga allratings={allratings} genres={item.genres} date={item.date[0]} image={item.cover}  title={item.label} id={item.id}/>
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
        <div id="mangas">
        {mangas}
        </div>
    )
}