import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Chapter() {
    const [data, setData] = useState("");
    const [image, setImage] = useState("");
    const {manga, chapter} = useParams();

    async function fetchAPI() {
        try {
            const response = await fetch(`http://127.0.0.1:8000/${manga}/${chapter}`)
            if (response.ok) {
                let result = await response.json();
                setData(result);
                data.map(item => {
                    setImage(
                    prevState => [...prevState,
                    <div style={{ display: 'flex', justifyContent: 'center', textDecoration:'none !important' }}>
                      {item}
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
            {image}
        </div>
    )
}