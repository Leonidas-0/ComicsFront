import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Categories() {
    const [data, setData] = useState("");
    const [genres, setGenres] = useState("");

    async function fetchAPI() {
        try {
            const response = await fetch(`https://mangaworld.herokuapp.com/genres`)
            if (response.ok) {
                let result = await response.json();
                setData(result);
                data.map(item => {
                    setGenres(
                    prevState => [...prevState,
                    <div style={{ display: 'flex', justifyContent: 'center', textDecoration:'none !important' }}>
                     <Link to={`/${item}`}>
                      {item}
                      </Link>
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
        <div style={{ height: '700px', width: '100%', display:'flex', flexDirection:'column', gap:'5px' }}>
            <br></br>
            {genres}
        </div>
    )
}