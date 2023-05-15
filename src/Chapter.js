import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function Chapter() {
    const [data, setData] = useState("");
    const [images, setImages] = useState("");
    const { mangaid, chapterid } = useParams();
    const [ maxlength, setMaxLength ] = useState("")
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
                        <div id="page" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none !important' }}>
                            <img src={`http://127.0.0.1:8000/media/${item.images}`}></img>
                        </div>]
                    )
                    setMaxLength(item.length)
                    console.log(item.length)
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
        <div>
            <Stack spacing={2} sx={{display:'flex', alignItems:'center', width:'auto'}}>
            <Link to={`/${mangaid}/${chapterid+1}`}>
            <Pagination count={maxlength} siblingCount={1} boundaryCount={1} />
            </Link>
            </Stack>
            <br></br>
            {images}
            <br></br>
        </div>
    )
}