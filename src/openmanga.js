import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Openmanga() {
    let { mangaid } = useParams();
    const [chapters, setChapters] = useState([null]);
    const [data, setData] = useState("");
    const [rating, setRating] = useState([]);
    const [genres, setGenres] = useState([]);
    // const [allratings, setAllratings] = useState([]);
    // console.log(allratings)

    function Rating(allratings) {
        // console.log(allratings)
        setRating("")
        let average = ""
        if (allratings.length !== 0) {
            average = Math.round(allratings.reduce((a, b) => a + b, 0) / allratings.length)
        }
        else {
            average = 0
        }
        for (let j = 0; j < 5; j++) {
            if (j >= average) {
                setRating(
                    prevState => [...prevState,
                    <div onClick={() => Rate(j + 1)}>☆</div>]
                )
            }
            else {
                setRating(
                    prevState => [...prevState,
                    <div onClick={() => Rate(j + 1)}>★</div>]
                )
            }
        }
    }
    async function fetchAPI() {
        try {
            const response = await fetch(`https://mangaworld.herokuapp.com/manga/${mangaid}`)
            if (response.ok) {
                let result = await response.json();
                setData(result);
                Rating(data.ratings)
                for (let j = 0; j < data.genres.length; j++) {
                    if (j === data.genres.length - 1)
                        setGenres(
                            prevState => [...prevState,
                                <span>{data.genres[j]}</span>]
                        )
                    else {
                        setGenres(
                            prevState => [...prevState,
                                <span>{data.genres[j]},&nbsp;</span>]
                        )
                    }
                }
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
    // useEffect(() => {
    //     Rating()
    //     }, [allratings])
    useEffect(() => {
        fetchAPI()
    },
        [data == ""])
    async function Rate(num) {
        setRating("")
        try {
            const response = await fetch(`https://mangaworld.herokuapp.com/rate/${mangaid}/${num}`)
            if (response.ok) {
                let result = await response.json();
                Rating(result[0])
            }
            else { return console.log('falied') }
        } catch (error) {
            // log your error, you can also return it to handle it in your calling function
        }
    }
    return (
        <div id="chapterview">
            <br></br>
            <img src={`https://mangaworld.herokuapp.com/media/${data.cover}`}></img>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '40px', cursor: 'pointer' }}>
                {rating}
            </div>
            <div style={{textWrap:'wrap'}}>
            {genres}
            </div>
            <br></br>
            <br></br>
            <a style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {chapters}
            </a>
            <br></br>
            <br></br>
        </div>
    )
}