import axios, { AxiosHeaders } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthUser = () => {

      const navigate = useNavigate()
     

      const getToken = ()=>{
         const tokenString= sessionStorage.getItem('token')
         const userToken= JSON.parse(tokenString)
         return userToken
      }

      const logout =()=>{
        sessionStorage.clear();
        navigate("/login")
        window.location.reload();
      }

      const getUser = ()=>{
        const userString= sessionStorage.getItem('user')
        const user_detail= JSON.parse(userString)
        return user_detail
     }

     const [token,setToken] =useState(getToken())

     const[user,setUser] =useState(getUser())

      const saveToken =(token,user) =>{

            sessionStorage.setItem('token',JSON.stringify(data.token))
            sessionStorage.setItem('user',JSON.stringify(data.user))
            setToken(token)
            setUser(user)
            navigate('/dashboard')
      }

      const http = axios.create({
        baseURL:"http://192.168.1.15:5000/signup",
        headers:{
            'Content-type':"application/json"
        }
      })

      return {
         setToken: saveToken,
         token,
         user,
         getToken,
         http,
         logout
      }

}

export default AuthUser