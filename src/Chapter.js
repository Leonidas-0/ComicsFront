import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Chapter(props) {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [images, setImages] = useState("");
    const { mangaid, chapterid } = useParams();
    if (props.location !== undefined) {
        console.log(1)
        mangaid=props.location.state.manga;
        chapterid=props.location.state.chapter;
    }
    const [maxlength, setMaxLength] = useState("")
    // const [ changechapter, setChangechapter ] = useState(false);
    // const [ chapter, setChapter ] = useState("");
    

    async function fetchAPI() {
        try {
            let response = ""
            // if (changechapter == true) {
            //     chapter = parseInt(chapterid)+1
            // }
            // else {
            //     chapter = parseInt(chapterid)
            // }
            response = await fetch(`https://mangaworld.herokuapp.com/manga/${mangaid}/${chapterid}`)
            if (response.ok) {
                let result = await response.json();
                setData(result);
                data.map(item => {
                    setImages(
                        prevState => [...prevState,
                        <div id="page" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none !important' }}>
                            <img src={`https://mangaworld.herokuapp.com/media/${item.images}`}></img>
                        </div>]
                    )
                    setMaxLength(item.length)
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
        // useEffect(() => {
        //     nextchapter()
    // async function nextchapter() {
    //     setChapter("")
    //     setChapter(+parseInt(chapterid)+ +parseInt(1))
    //     try {
    //         const response = await fetch(`http://127.0.0.1:8000/manga/${mangaid}/${chapterid}`)
    //         if (response.ok) {
    //             let result = await response.json();
    //             setData0(result);
    //             setImages("")
    //             data0.map(item => {
    //                 setImages(
    //                     prevState => [...prevState,
    //                     <div id="page" style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none !important' }}>
    //                         <img src={`http://127.0.0.1:8000/media/${item.images}`}></img>
    //                     </div>]
    //                 )
    //                 setMaxLength(item.length)
    //                 console.log(item.length)
    //             }
    //             )
    //         }
    //         else { return console.log('falied') }
    //     } catch (error) {
    //     }
    // }
// }, [chapter]);
    function Changechapter(chapter) {
        const {state} = useLocation();
        const { manga, nextchapter } = state;
        if (chapter > parseInt(maxlength) || chapter < 1) {
            setTimeout(function(){  
            navigate(`/Openmanga/${mangaid}`)
        }, 100);
        }
        else {
        setTimeout(function(){
            // navigate(`/${mangaid}/${chapter}`)
            navigate(`/${manga}/${nextchapter}`, { state: { manga: mangaid, nextchapter: chapter+1 } });
        }, 100);
    }
    }
    return (
        <div>
            <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
                {/* <Link to={`/${mangaid}/${chapterid}`}>
            <Pagination count={maxlength} siblingCount={1} boundaryCount={1} />
            </Link> */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: "5px" }}>
                <Link onClick={() => Changechapter(parseInt(chapterid) - 1)}>
                <ArrowBackIosIcon sx={{ fontSize: '40px !important' }} />
            </Link>
            <Link onClick={() => Changechapter(parseInt(chapterid) + 1)}>
                <ArrowForwardIosIcon sx={{ fontSize: '40px !important' }} />
            </Link>
                </div>
            </Stack>
            <br></br>
            {images}
            <br></br>
            <Link onClick={() => Changechapter(parseInt(chapterid) - 1)}>
                <ArrowBackIosIcon sx={{ fontSize: '40px !important' }} />
            </Link>
            <Link onClick={() => Changechapter(parseInt(chapterid) + 1)}>
                <ArrowForwardIosIcon sx={{ fontSize: '40px !important' }} />
            </Link>
            <br></br>
            <br></br>
        </div>
    )
}