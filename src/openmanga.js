import Altnavbar from "./Navbar";
import { useParams } from "react-router-dom";
export default function Openmanga () {
    let { mangaid } = useParams();

    return (
        <div>
            {mangaid}
        </div>
    )
}