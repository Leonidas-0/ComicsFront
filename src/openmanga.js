import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Openmanga () {
    let { mangaid } = useParams();
    const [chapters, setChapters] = useState([null]);  
    const [data, setData] = useState("");  
  async function fetchAPI() {
    try {
      const response = await fetch(`http://127.0.0.1:8000/manga/${mangaid}`)
      if (response.ok) {
        let result = await response.json();
        setData(result);
        console.log(data.chapters.length)
        for (let i = 0; i < data.chapters.length; i++) {
        setChapters(
            prevState => [...prevState,
            <div>
                chapter: {data.chapters[i]}
            </div>]
            )
        console.log(chapters)
      }
        // do something with data
        // setImage(data.map(item => {
        //   return <img src={`http://127.0.0.1:8000/media/${item.cover}`}></img>;
        // }))
          // mangas.push(
          //   <div style={{ display: 'flex', justifyContent: 'center' }}>
          //     <Manga />
          //   </div>
          // )
      }
      else { return console.log('falied') }
    } catch (error) {
      // log your error, you can also return it to handle it in your calling function
    }
  }
  useEffect(() => {
    fetchAPI()
  },
    [data == ""])

    return (
        <div id="chapterview">
            <br></br>
            <img src={`http://127.0.0.1:8000/media/${data.cover}`}></img>
            <br></br>
            {chapters}
        </div>
    )
}