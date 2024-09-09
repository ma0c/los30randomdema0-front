import {useNavigate, useParams} from "react-router-dom";

export default function SetToken() {
    const { token } = useParams();
    console.log("TOKEN", token);
    localStorage.setItem('token', token);
    const navigate = useNavigate();
    navigate('/')
    return <></>
}