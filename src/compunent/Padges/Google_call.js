import axios from "axios";
import { useEffect, useState } from "react";
import { google_callback, mainapi } from "../Api";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal"
import Home from "./home";

export default function Google(){
  const cookie=Cookie()
 
   const location = useLocation()
  useEffect(()=>{
       async function google(){
       try{
        let res = await axios.get(`http://127.0.0.1:8000/api/auth/google/callback${location.search}`)
        
       let token = res.data.access_token
         cookie.set("acadime",token)
       }catch(err){
       console.log(err)
       }

       }
       google()
        },[])
  return(<Home/>)
}