import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

export default function SetToken() {
    const { token } = useParams();
    console.log("TOKEN", token);
    localStorage.setItem('token', token);
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    }, []);
    return <></>
}
