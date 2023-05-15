import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Chapter() {
    const [data, setData] = useState("");
    const [images, setImages] = useState("");
    const { mangaid, chapterid } = useParams();
    // console.log(mangaid)
    // console.log(chapterid)

    async function fetchAPI() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/manga/${mangaid}/${chapterid}`)
            if (response.ok) {
                let result = await response.json();
                setData(result);
                data.map(item => {
                    setImages(
                    prevState => [...prevState,
                    <div style={{ display: 'flex', justifyContent: 'center', textDecoration:'none !important' }}>
                      <img src={`http://127.0.0.1:8000/media/${item.images}`}></img>
                    </div>]
                    )
                  }
                  )
            }
            else { return console.log('falied') }
        } catch (error) {
        }
    }
    useEffect(() => {
        fetchAPI()
    },
        [data == ""])
    return (
        <div style={{ height: '700px', width: '100%' }}>
            {images}
        </div>
    )
}