import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Openmanga() {
    let { mangaid } = useParams();
    const [chapters, setChapters] = useState([null]);
    const [data, setData] = useState("");
    const [rating, setRating] = useState([]);
    const [allratings, setAllratings] = useState([]);
    
    function Rating() {
        setRating("")
        let average=""
        if (allratings.length !== 0) {
            console.log(allratings)
            average = Math.round(allratings.reduce((a, b) => a + b, 0) / allratings.length)
        }
        else {
            average = 0
        }
        for (let j = 0; j < 5; j++) {
            if (j >= average) {
                setRating(
                    prevState => [...prevState,
                    <div onClick={() => Rate(j+1)}>☆</div>]
                )
            }
            else {
                setRating(
                    prevState => [...prevState,
                <div onClick={() => Rate(j+1)}>★</div>]
                )
            }                   
        }
    }
    async function fetchAPI() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/manga/${mangaid}`)
            if (response.ok) {
                let result = await response.json();
                setData(result);
                for (let i = 0; i < data.chapters.length; i++) {
                    setChapters(
                        prevState => [...prevState,
                        <Link to={`/${mangaid}/${data.chapters[i]}`}>
                            chapter: {data.chapters[i]}
                        </Link>]
                    )
                }    
            }
            else { return console.log('falied') }
        } catch (error) {
        }
    }
    useEffect(() => {
        fetchAPI()
    },
        [data == ""])
    useEffect(() => {
        Rating()
        }, [allratings])
    async function Rate(num) {
        setRating("")
        try {
            const response = await fetch(`http://127.0.0.1:8000/rate/${mangaid}/${num}`)
            if (response.ok) {
                let result = await response.json();
                setAllratings(result[0])
            }
            else { return console.log('falied') }
        } catch (error) {
            // log your error, you can also return it to handle it in your calling function
        }
    }
    return (
        <div id="chapterview">
            <br></br>
            <img src={`http://127.0.0.1:8000/media/${data.cover}`}></img>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '40px', }}>
                {rating}
            </div>
            <br></br>
            <a>
            {chapters}
            </a>
        </div>
    )
}