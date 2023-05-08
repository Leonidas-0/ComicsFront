import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Openmanga() {
    let { mangaid } = useParams();
    const [chapters, setChapters] = useState([null]);
    const [data, setData] = useState("");
    const [rating, setRating] = useState([null]);

    async function fetchAPI() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/manga/${mangaid}`)
            if (response.ok) {
                let result = await response.json();
                setData(result);
                let average = Math.round(data.ratings.reduce((a, b) => a + b, 0) / data.ratings.length)
                console.log(data.ratings)
                for (let i = 0; i < data.chapters.length; i++) {
                    setChapters(
                        prevState => [...prevState,
                        <div>
                            chapter: {data.chapters[i]}
                        </div>]
                    )
                    console.log(chapters)
                }
                for (let j = 0; j < 5; j++) {
                if (j >= average) {
                setRating(
                    prevState => [...prevState,
                    <div onClick={() => Rate(j)}>☆</div>]
                )
                    }
                else {
                    setRating(
                    prevState => [...prevState,
                    <div onClick={() => Rate(j)}>★</div>]
                )
                }
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
    async function Rate(num) {
        try {
            const response = await fetch(`http://127.0.0.1:8000/rate/${mangaid}/${num}`)
            if (response.ok) {
                
            }
            else { return console.log('falied') }
        } catch (error) {
            // log your error, you can also return it to handle it in your calling function
        }
    }
    let rows = []
    return (
        <div id="chapterview">
            <br></br>
            <img src={`http://127.0.0.1:8000/media/${data.cover}`}></img>
            <br></br>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', fontSize:'50px', }}>
            {rating}
            </div>
            {chapters}
        </div>
    )
}