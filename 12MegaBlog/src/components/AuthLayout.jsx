import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({children, authentication 
    = true}) {

        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        const navigate = useNavigate()
        const [loader, setLoader] = useState(true)
        const authStatus = useSelector(state => state.auth.status)

        useEffect(() => {
            if(authentication && authStatus !== authentication) {
                navigate("/login")
            } else if(!authentication && authStatus !== authentication){
                navigate("/")
            }
        }, [authStatus, navigate, authentication])


    return loader ? <h1>Loading...</h1> : <>{children}</>
}