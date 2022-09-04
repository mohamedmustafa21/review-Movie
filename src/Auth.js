import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({authenticate}) => {
    const navigate = useNavigate()
    const onClick = ()=>{
        authenticate();
        navigate('/home')
    };
    return(
        <div>
            <h2>Please Auth to contanue</h2>
            <button onClick={onClick}>Auth </button>
        </div>
    )
}


export default Auth