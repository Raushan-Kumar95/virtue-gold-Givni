import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";



const TokenAuth = () => {

    const { getToken } = AuthUser()
    const navigate = useNavigate()

    useEffect(() => {

        if (!getToken()) {
            navigate("/login")
        }
    }, [])

    return (null)



}

export default TokenAuth