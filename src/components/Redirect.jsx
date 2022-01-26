import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function Redirect () {

    let navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    },[])

    return (
        <div/>
    )
}